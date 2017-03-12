const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, ''),
  entry: {
    app: './assets/js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
          }]
        })
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('site.css'),
  ],
};
