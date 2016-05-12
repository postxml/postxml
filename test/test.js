var postxml = require('../');
var expect = require('chai').expect;
var plugin1 = require('./plugin1.js');
var plugin2 = require('./plugin2.js');

var process = function (input, output, opts, plugins) {
    var processed = postxml(plugins)
                        .process(input);

    expect(output).to.eql(processed);
};

var use = function (input, output, opts, plugin) {
    var processed = postxml().use(plugin).process(input);

    expect(output).to.eql(processed);
}

describe('postxml', function () {
    it('proccess method', function () {
        process(
            '<block class="b-block"><element class="b-block__element">Текст</element></block>',
            '<block class="b-block"><div class="b-block__element" mod="mod">Текст</div></block>',
            {},
            [
               plugin1(['element']),
               plugin2(['div'])
            ]
        );
    });
    it('use method', function () {
        use(
            '<block class="b-block"><element class="b-block__element">Текст</element></block>',
            '<block class="b-block"><div class="b-block__element">Текст</div></block>',
            {},
            plugin1(['element'])
        );
    });
});
