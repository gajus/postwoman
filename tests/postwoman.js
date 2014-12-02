var expect = require('chai').expect,
    Postwoman = require('../src/postwoman.js');

describe('Postwoman', function () {
    describe('.normalise()', function () {
        it('separates outward and inward code with a space', function () {
            expect(Postwoman.normalise('PE129PP')).to.equal('PE12 9PP');
        });
        it('makes postcode to uppercase', function () {
            expect(Postwoman.normalise('pe129pp')).to.equal('PE12 9PP');
        });
        it('throws an error if postcode is invalid', function () {
            expect(function () {
                Postwoman.normalise('foobar');
            }).to.throw(Error, 'Cannot normalise invalid postcode ("foobar").');
        });
    });
});