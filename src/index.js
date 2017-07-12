import {SourceMapConsumer} from 'source-map';
import {RawSource} from 'webpack-sources';
import ModuleFilenameHelpers from 'webpack/lib/ModuleFilenameHelpers';
import * as emoji from './emoji';
import { minify } from 'uglify-es';

export default class EmojifyPlugin {
  constructor(options) {
    if (typeof options !== 'object' || Array.isArray(options)) {
      this.options = {};
    } else {
      this.options = options || {};
    }

    this.options.test = this.options.test || /\.js($|\?)/i;
  }

  apply(compiler) {
    compiler.plugin('compilation', (compilation) => {

      compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
        const assets = new WeakSet();

        chunks.reduce((acc, chunk) => acc.concat(chunk.files || []), [])
          .concat(compilation.additionalChunkAssets || [])
          .filter(ModuleFilenameHelpers.matchObject.bind(null, this.options))
          .forEach((file) => {
            const asset = compilation.assets[file];
            if (assets.has(asset)) {
              return;
            }

            let source = asset.source();

            source = emoji.pack(source, emoji.generateEmoji());
            const unpacker = minify(emoji.unpack.toString(), {mangle:true}).code;
            const generator = minify(emoji.generateEmoji.toString(), {mangle:true}).code;

            source = `eval((${unpacker})(\n"${source}",\n(${generator})()))`;

            // Updating assets
            assets.add(compilation.assets[file] = new RawSource(source));
          });
        callback();
      });
    });
  }
}
