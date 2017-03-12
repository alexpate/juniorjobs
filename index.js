const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
const htmlMinifier = require('metalsmith-html-minifier');
const collections = require('metalsmith-collections');
const handlebars = require('handlebars');
const data = require('metalsmith-data');

const _meta = {
  title: 'JuniorJobs - Entry-level jobs in the UK tech industry',
  description: '',
  generator: 'Metalsmith',
  url: 'https://juniorjobs.io'
};

Metalsmith(__dirname)
  .metadata(_meta)
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(permalinks())
  .use(data({
    listings: './data/listings.json',
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials',
  }))
  // .use(htmlMinifier("*.html", {
  //   removeComments: true,
  //   processScripts: ['application/ld+json']
  // }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
