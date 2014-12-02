var Postcode = require('postcode'),
    Postwoman = {};

Postwoman.match = function (input) {
    var regex,
        matches;

    // @see http://regexlib.com/REDetails.aspx?regexp_id=260
    regex = /([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]?\s?[0-9][ABD-HJLN-UW-Z]{2})/ig;

    matches = input.match(regex);

    matches = matches || [];

    matches = matches.filter(Postwoman.validate);
    matches = matches.map(Postwoman.normalise);

    return matches;
};

Postwoman.validate = function (input) {
    var postcode;

    postcode = new Postcode(input);

    return postcode.valid();
}

Postwoman.normalise = function (input) {
    var postcode;

    postcode = new Postcode(input);
    postcode = postcode.normalise();

    if (!postcode) {
        throw new Error('Cannot normalise invalid postcode ("' + input + '").')
    }

    return postcode;
};

module.exports = Postwoman;