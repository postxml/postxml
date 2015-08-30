var cheerio = require('cheerio');

var set = function (variable, alt) {
    return (variable != undefined) ? variable : alt;
};

module.exports = function(html, plugins, opts){
    var options = {};
    options.normalizeWhitespace = set(options.normalizeWhitespace, true);
    options.xmlMode = set(options.xmlMode, false);
    options.decodeEntities = set(options.decodeEntities, false);

    // load
    var $ = cheerio.load(html, options);

    // transform with plugins
    for(var i = 0, len = plugins.length; i < len; i++){
        plugins[i]($);
    }

    return $.html();
};
