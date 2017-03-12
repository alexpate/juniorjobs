const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
const htmlMinifier = require('metalsmith-html-minifier');

const _meta = {
  title: 'First Tech Jobs',
  description: '',
  generator: 'Metalsmith',
  url: 'https://jobs.alexpate.uk'
};

Metalsmith(__dirname)
  .metadata(_meta)
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials',
    partialExtension: '.html'
  }))
  .use(htmlMinifier("*.html", {
    removeComments: true,
    processScripts: ['application/ld+json']
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
