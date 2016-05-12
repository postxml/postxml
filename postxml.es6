
import cheerio from 'cheerio';

class POSTXML {
    constructor () {
        let self = this;
        
        return (plugins) => {
            self.plugins = plugins || [];
            
            return self;
        }
    }
    process (html, options = {}) {
        
        // set options for htmlparser2
        options.normalizeWhitespace = options.normalizeWhitespace || false;
        options.xmlMode = options.xmlMode || false;
        options.decodeEntities = options.decodeEntities || false;
        
        // load html string
        let $ = cheerio.load(html, options);
        
        // transform with plugins
        this.plugins.forEach(plugin => plugin($));
        
        this.html = $.html();
        
        return this;
    }
    use (plugin) {
        this.plugins.push(plugin);
        
        return this;
    }
}

module.exports = new POSTXML;