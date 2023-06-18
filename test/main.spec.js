let chai = require('chai');
//var sinon = require('sinon');
let sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

let scriptInfoText = require('../src/index');

describe('index.js',
    function() {

        describe('scriptInfoText',
            function () {
                it('returns "Welcome to Stefan\'s Planets.nu scripts"',
                    function() {
                        let actual = scriptInfoText();
                        actual.should.equal('Welcome to Stefan\'s Planets.nu scripts');
                    });
            });
    });
