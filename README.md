# Postxml

It is a tool for transformating xml and html with JS plugins using [cheerio API](http://cheeriojs.github.io/cheerio/).

## Usage

### Instalation

`npm i postxml --save-dev`

### Nodejs
```js
var postxml = require('postxml');
var postxml-plugin = require('postxml-plugin');
var cheerioOptions = {};

var output = postxml(
   '<div class="b-block"></div>',
   [
      postxml-plugin(opts)
   ],
   cheerioOptions
);
```

### Gulp

`npm i gulp-postxml --save-dev`
```js
var postxml = require('gulp-postxml');
var postxmlPlugins = [
      require('postxml-plugin')
   ];
var cheerioOptions = {};

gulp.task('html', function () {
   gulp.src('index.htm')
      .pipe(postxml(postxmlPlugins, cheerioOptions))
      .pipe(gulp.dest('out'));
})
```

## Plugins
* [Plugin Boilerplate](https://github.com/postxml/postxml-plugin-boilerplate)
* [postxml-imgalt](https://github.com/postxml/postxml-imgalt)
* [poxtxml-custom-tags](https://github.com/postxml/poxtxml-custom-tags)
* [poxtxml-import](https://github.com/postxml/poxtxml-import)
* [poxtxml-placeholder](https://github.com/postxml/poxtxml-placeholder)
* [poxtxml-beml](https://github.com/postxml/poxtxml-beml)
