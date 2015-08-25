var cheerio = require('cheerio');

module.exports = function(html, opts, plugins){
   var options = {};
   options.normalizeWhitespace = opts.normalizeWhitespace || true;
   options.xmlMode = opts.xmlMode || true;
   options.decodeEntities = opts.decodeEntities || false;

   // load
   var $ = cheerio.load(html, options);

   // transform with plugins
   for(var i = 0, len = plugins.length; i < len; i++){
      plugins[i]($);
   }

   return $.html();
};
