# Postxml

It is a tool for transforming html/xml with JS plugins based on [cheerio](http://cheeriojs.github.io/cheerio/).

## Instalation

`npm i postxml --save-dev`

## Usage

### Nodejs
```js
var postxml = require('postxml');
var cheerioOptions = {};

var output = postxml([
      require('postxml-plugin')(pluginOptions)
   ])
   .process('<div class="b-block"></div>', cheerioOptions);
);
```

### Gulp
Use [`gulp-postxml`](https://github.com/postxml/gulp-postxml)
```js
var postxml = require('gulp-postxml');
var postxmlPlugins = [
      require('postxml-plugin')(pluginOptions)
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

## Boilerplate for new plugins
* [Plugin Boilerplate](https://github.com/postxml/postxml-plugin-boilerplate)

## Plugins
* [postxml-amp](https://github.com/rkazakov/postxml-amp) - converts plain HTML to Google Accelerated Mobile Pages (AMP)
* [postxml-beml](https://github.com/postxml/postxml-beml) - [BEML](https://github.com/zenwalker/node-beml) plugin
* [postxml-custom-tags](https://github.com/postxml/postxml-custom-tags)
* [postxml-image-size](https://github.com/postxml/postxml-image-size) - adds sizes to images
* [postxml-imgalt](https://github.com/postxml/postxml-imgalt)
* [postxml-import](https://github.com/postxml/postxml-import)
* [postxml-import-styles](https://github.com/postxml/postxml-import-styles) - replace `<link>` with `<style>` and import css-code
* [postxml-markdown](https://github.com/postxml/postxml-markdown) - add classes (bem) to `markdown` html tags
* [postxml-ng-valid](https://github.com/postxml/postxml-ng-valid) - replace `ng-` with `data-ng`
* [postxml-placeholder](https://github.com/postxml/postxml-placeholder)
* [postxml-remove](https://github.com/postxml/postxml-remove) - removes elements by query selectors
* [postxml-repeat](https://github.com/postxml/postxml-remove) - repeat elements
* [postxml-wrap](https://github.com/postxml/postxml-wrap) - wrap with emmet abbreviation

## Ideas for plugins
* **postxml-inline-data** - replace images and files with data uri
* **postxml-template** - added template for postxml-repeat
* **postxml-lazyload** - shortcut syntax for lazyload
* **postxml-prefix** - add prefix to all classes
* **postxml-size** - shortcut width & height
* **postxml-variables** - html variables

## Examples of usage postxml in real projects
* http://projects.alanev.ru/wizard/wizard.dev.zip
* http://projects.alanev.ru/apc/apc.dev.zip
