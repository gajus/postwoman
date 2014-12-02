var expect = require('chai').expect,
    Postwoman = require('../src/postwoman.js');

describe('Postwoman', function () {
    describe('.match()', function () {
        it('extracts valid postcode from a string', function () {
            expect(Postwoman.match('PE12 9PP; DN3 6GB')).to.deep.equal(['PE12 9PP', 'DN3 6GB']);
        });
        it('normalises extracted postcodes', function () {
            expect(Postwoman.match('PE129PP; DN36GB')).to.deep.equal(['PE12 9PP', 'DN3 6GB']);
        });
    });
    describe('.validate()', function () {
        describe('when postcode is valid', function () {
            it('returns true', function () {
                expect(Postwoman.validate('PE12 9PP')).to.true;
            });
        });
        describe('when postcode is invalid', function () {
            it('returns false', function () {
                expect(Postwoman.validate('PE12 APP')).to.false;
            });
        });
    });
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