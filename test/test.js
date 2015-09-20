var postxml = require('../');
var expect = require('chai').expect;

var process = function (input, output, opts, plugins) {
    var processed = postxml(plugins)
                        .process(input);

    expect(output).to.eql(processed);
};

var load = function (input, output, opts, plugins) {
    var processed = postxml()
                        .load(input);

    expect(processed).to.be.a('function');
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
               require('./plugin1.js')(['element']),
               require('./plugin2.js')(['div'])
            ]
        );
    });
    it('load method', function () {
        load(
            '<block class="b-block"><element class="b-block__element">Текст</element></block>',
            '<block class="b-block"><div class="b-block__element" mod="mod">Текст</div></block>',
            {},
            [
               require('./plugin1.js')(['element']),
               require('./plugin2.js')(['div'])
            ]
        );
    });
    it('use method', function () {
        use(
            '<block class="b-block"><element class="b-block__element">Текст</element></block>',
            '<block class="b-block"><div class="b-block__element">Текст</div></block>',
            {},
            require('./plugin1.js')(['element'])
        );
    });
});
