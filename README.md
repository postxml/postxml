# Postxml

It is a tool for tranformating xml and html with JS plugins using [cheerio API](http://cheeriojs.github.io/cheerio/).

## Usage



```js
var postxml = require('postxml');
var postxml-plugin = require('postxml-plugin');

var output = postxml(
   '<div class="b-block"></div>',
   [
      postxml-plugin(opts)
   ]
);
```

## Plugins
*
