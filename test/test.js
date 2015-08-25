var postxml = require('../');
var expect = require('chai').expect;

var plugin1 = require('./plugin1.js');
var plugin2 = require('./plugin2.js');

var test = function (input, output, opts) {
   //  var $ = cheerio.load(input);

   //  plugin(opts)($);
   var processed = postxml(
      '<block class="b-block"><element class="b-block__element">Текст</element></block>',
      [
         plugin1(['element']),
         plugin2(['div'])
      ],
      opts
   );

   expect(output).to.eql(processed);
};

describe('postxml', function () {
    it('link tag', function () {
        test(
            '<block class="b-block"><element class="b-block__element">Текст</element></block>',
            '<block class="b-block"><div class="b-block__element" mod="mod">Текст</div></block>',
            {}
        );
    });
});
