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
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader'
      },
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
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
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
