# emojify-webpack-plugin


## Installation
Installation can be done through yarn or npm
```sh
yarn add --dev emojify-webpack-plugin
# or alternativly
npm install --save-dev emojify-webpack-plugin
```

The plugin can be activated by simply adding it to your plugin chain. For best results minify your code first.

```js
var EmojifyPlugin = require('emojify-webpack-plugin');

{
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js($|\?)/i,
      minimize: true,
    }),

    new EmojifyPlugin(),
  ]
}
```
