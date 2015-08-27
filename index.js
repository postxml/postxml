var cheerio = require('cheerio');

module.exports = function(html, plugins, opts){
   var options = {};
   options.normalizeWhitespace = (opts.normalizeWhitespace != undefined) ? opts.normalizeWhitespace : true;
   options.xmlMode = (opts.xmlMode != undefined) ? opts.xmlMode : false;
   options.decodeEntities = (opts.decodeEntities != undefined) ? opts.decodeEntities : false;

   // load
   var $ = cheerio.load(html, options);

   // transform with plugins
   for(var i = 0, len = plugins.length; i < len; i++){
      plugins[i]($);
   }

   return $.html();
};
