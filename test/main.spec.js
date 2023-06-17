var chai = require('chai');
//var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

var main = require('../app/main');

describe('main.js',
    function() {

        describe('main',
            function () {
                it('should return "Hello World"',
                    function() {
                        var actual = main();
                        actual.should.equal('Hello World');
                    });
            });
    });
