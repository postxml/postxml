var cheerio = require('cheerio');

var POSTXML = function () {
    
    var postxml = this;
    
    return function (plugins) {
        postxml.plugins = plugins || [];
        return postxml;
    };
};

POSTXML.prototype.process = function (html) {
    var options = {}, $;
    options.normalizeWhitespace = options.normalizeWhitespace || true;
    options.xmlMode = options.xmlMode || false;
    options.decodeEntities = options.decodeEntities || false;

    // transform with plugins
    this.plugins.forEach(function (plugin) {
        $ = cheerio.load(html, options);
        plugin($);
        html = $.html()
    });

    return $.html();
}

POSTXML.prototype.use = function (plugin) {
    this.plugins.push(plugin);
    
    return this;
}

module.exports = new POSTXML;
