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

  prepareFunction(func) {
    return minify(func.toString(), {mangle:true}).code.replace(/function(\s\w{2,})/g, 'function')
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
            const unpacker = this.prepareFunction(emoji.unpack);
            const generator = this.prepareFunction(emoji.generateEmoji);

            source = `eval((${unpacker})(\n"${source}",\n(${generator})()))`;

            // Updating assets
            assets.add(compilation.assets[file] = new RawSource(source));
          });
        callback();
      });
    });
  }
}
