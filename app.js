const cssStandards = require('spike-css-standards')
const latest = require('babel-preset-latest')
const reshape = require('reshape')
const include = require('reshape-include')
const layouts = require('reshape-layouts')
const content = require('reshape-content')
const expressions = require('reshape-expressions')

const listings = require('./data/listings.json')

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*'],
  reshape: {
    locals: {
      defaultTitle: 'JuniorJobs - Entry level jobs in UK tech/design',
      jobs: listings
    },
    plugins: [
      layouts(),
      content(),
      include(),
      expressions()
    ]
  },
  postcss: (ctx) => {
    return cssStandards({ parser: false, webpack: ctx })
  },
  babel: { presets: [latest] }
}
