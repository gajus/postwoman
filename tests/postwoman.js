var expect = require('chai').expect,
    Postwoman = require('../src/postwoman.js');

describe('Postwoman', function () {
    describe('.match()', function () {
        it('extracts valid postcode from a string', function () {
            expect(Postwoman.match('PE12 9PP; DN3 6GB')).to.deep.equal(['PE12 9PP', 'DN3 6GB']);
        });
        it('extracts postcodes from DOM', function () {
            expect(Postwoman.match('<address>Vue West End (Leicester Square)<br>3 Cranbourn Street<br>Leicester Square<br>London<br>WC2H 7AL</address>')).to.deep.equal(['WC2H 7AL']);
        });
        it('extracts only unique postcodes', function () {
            expect(Postwoman.match('PE12 9PP; PE12 9PP')).to.deep.equal(['PE12 9PP']);
        });
        it('normalises extracted postcodes', function () {
            expect(Postwoman.match('PE129PP; DN36GB')).to.deep.equal(['PE12 9PP', 'DN3 6GB']);
        });
    });
    describe('.validate()', function () {
        var fs = require('fs'),
            postcodes = fs.readFileSync(__dirname + '/fixtures/valid.csv', {encoding: 'utf8'}).split('\n');

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
        it('validates all UK postcodes', function () {
            var pass = true;
            postcodes.forEach(function (postcode) {
                if (!Postwoman.validate(postcode.trim())) {
                    console.log(postcode);

                    pass = false;                        
                }
            });
            expect(pass).to.be.true;
        });
    });
    describe('.normalise()', function () {
        it('separates outward and inward code with a space', function () {
            expect(Postwoman.normalise('PE129PP')).to.equal('PE12 9PP');
        });
        it('makes the postcode uppercase', function () {
            expect(Postwoman.normalise('pe129pp')).to.equal('PE12 9PP');
        });
        describe('when postcode is invalid', function () {
            it('throws an error', function () {
                expect(function () {
                    Postwoman.normalise('foobar');
                }).to.throw(Error, 'Cannot normalise invalid postcode ("foobar").');
            });
            it('error has input property', function () {
                var error;
                try {
                    Postwoman.normalise('foobar');
                } catch (e) {
                    error = e;
                }

                expect(error.input).to.equal('foobar');
            });
        });
    });
});