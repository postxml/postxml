# Postxml

It is a tool for transformating xml and html with JS plugins using [cheerio API](http://cheeriojs.github.io/cheerio/).

## Instalation

`npm i postxml --save-dev`

## Usage

### Nodejs
```js
var postxml = require('postxml');
var postxml-plugin = require('postxml-plugin');
var cheerioOptions = {};

var output = postxml([
      postxml-plugin(opts)
   ])
   .process('<div class="b-block"></div>', cheerioOptions);
);
```

### Gulp

`npm i gulp-postxml --save-dev`
```js
var postxml = require('gulp-postxml');
var postxmlPlugins = [
      require('postxml-plugin')(options)
   ];
var cheerioOptions = {};

gulp.task('html', function () {
   gulp.src('index.htm')
      .pipe(postxml(postxmlPlugins, cheerioOptions))
      .pipe(gulp.dest('out'));
})
```

## API

### Process(html, cheerioOptions)
Transform html with plugins

### Use(plugin)
Add plugin

### Load(html, cheerioOptions)
Transform html into cheerio object

## Plugins
* [Plugin Boilerplate](https://github.com/postxml/postxml-plugin-boilerplate)
* [postxml-imgalt](https://github.com/postxml/postxml-imgalt)
* [postxml-custom-tags](https://github.com/postxml/postxml-custom-tags)
* [postxml-import](https://github.com/postxml/postxml-import)
* [postxml-placeholder](https://github.com/postxml/postxml-placeholder)
* [postxml-beml](https://github.com/postxml/postxml-beml)
* [postxml-ng-valid](https://github.com/postxml/postxml-ng-valid) - replace `ng-` with `data-ng`
* [postxml-markdown](https://github.com/postxml/postxml-markdown) - add classes (bem) to `markdown` html tags
* [postxml-wrap](https://github.com/postxml/postxml-wrap) - wrap with emmet abbreviation
* [postxml-import-styles](https://github.com/postxml/postxml-import-styles) - replace `<link>` with `<style>` and import css-code
* [postxml-image-size](https://github.com/postxml/postxml-image-size) - adds sizes to images
* [postxml-remove](https://github.com/postxml/postxml-remove) - removes elements by query selectors


## Ideas for plugins
* **postxml-inline-data** - replace images and files with data uri
* **postxml-template** - added template for postxml-repeat
* **postxml-lazyload** - syntax for lazyload
* **postxml-lodash-template** - anable lodash templates
* **postxml-prefix** - add prefix to all classes
* **postxml-size** - shortcut width & height 

## Examples of usage postxml in real projects
* http://projects.alanev.ru/apc/apc.dev.zip
* http://projects.alanev.ru/nanopol/nanopol.dev.zip