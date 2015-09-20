var cheerio = require('cheerio');

var set = function (variable, alt) {
    return (variable != undefined) ? variable : alt;
};

var POSTXML = function () {
    
    var postxml = this;
    
    return function (plugins) {
        postxml.plugins = plugins || [];
        return postxml;
    };
};

POSTXML.prototype.process = function (html) {
    var options = {}, $;
    options.normalizeWhitespace = set(options.normalizeWhitespace, true);
    options.xmlMode = set(options.xmlMode, false);
    options.decodeEntities = set(options.decodeEntities, false);

    // transform with plugins
    this.plugins.forEach(function (plugin) {
        $ = cheerio.load(html, options);
        plugin($);
        html = $.html()
    });

    return $.html();
}

POSTXML.prototype.load = cheerio.load;

POSTXML.prototype.use = function (plugin) {
    this.plugins.push(plugin);
    
    return this;
}

module.exports = new POSTXML;
