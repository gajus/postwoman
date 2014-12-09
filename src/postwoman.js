var RE = {},
    Postwoman = {},
    _ = {};

_.uniq = require('lodash.uniq');

RE.outwardCode = '(?:N1P|[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKSTUW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y])';
RE.inwardCode = '[0-9][ABD-HJLNP-UW-Z]{2}';

// RE: N1P
// To accommodate redevelopment in Kings Cross Central, a new district N1C was created in 2010.[4][5] The N area also includes two non-geographic postcode districts: N1P for PO boxes in N1 or N1C; and N81 for ballot mailings to Electoral Reform Services in N8.[6]
// @see http://en.wikipedia.org/wiki/N_postcode_area

// @see https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s16.html
// British Standard BS7666, available at http://interim.cabinetoffice.gov.uk/govtalk/schemasstandards/e-gif/datastandards/address/postcode.aspx, describes the U.K. postcode rules.
// The Royal Mail’s website at http://www.royalmail.com/postcode-finder lets you use an address to look up an individual postcode.

// The assumption is that postcode is either upper case or lower case, but not a mix of both.
RE.postcodeUpperCase = new RegExp('^(' + RE.outwardCode + ') ?(' + RE.inwardCode + ')$');
RE.postcodeLowerCase = new RegExp('^(' + RE.outwardCode.toLowerCase() + ') ?(' + RE.inwardCode.toLowerCase() + ')$');

RE.matchPostcodeUpperCase = new RegExp('(' + RE.outwardCode + ') ?(' + RE.inwardCode + ')', 'g');
RE.matchPostcodeLowerCase = new RegExp('(' + RE.outwardCode.toLowerCase() + ') ?(' + RE.inwardCode.toLowerCase() + ')', 'g');

/**
 * Postcode matching is using postcode validation rules to match postcodes in a string.
 * 
 * Returned postcodes are normalised and unique.
 * 
 * @param {String} input
 * @return {Array}
 */
Postwoman.match = function (input) {
    var postcodes = [],
        matches;

    matches = input.match(RE.matchPostcodeUpperCase);

    if (matches) {
        postcodes = postcodes.concat(matches);
    }

    matches = input.match(RE.matchPostcodeLowerCase);

    if (matches) {
        postcodes = postcodes.concat(matches);
    }

    postcodes = postcodes.map(Postwoman.normalise);
    postcodes = _.uniq(postcodes);

    return postcodes;
};

/**
 * @param {String} input
 * @return {Boolean}
 */
Postwoman.validate = function (input) {
    return RE.postcodeUpperCase.test(input) || RE.postcodeLowerCase.test(input);
};

/**
 * Postcode normalisation makes postcode uppercase and
 * space-separates outward and inward codes.
 *
 * If input is an invalid postcode, an error will be thrown.
 * 
 * @param {String} input
 * @return {String}
 */
Postwoman.normalise = function (input) {
    var postcode,
        outwardCode,
        inwardCode,
        error;

    if (!Postwoman.validate(input)) {
        error = new Error('Cannot normalise invalid postcode ("' + input + '").');
        error.input = input;
        throw error;
    }

    postcode = input.match(RE.postcodeUpperCase);

    if (!postcode) {
        postcode = input.match(RE.postcodeLowerCase);
    }

    return postcode[1].toUpperCase() + ' ' + postcode[2].toUpperCase();
};

module.exports = Postwoman;