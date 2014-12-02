var Postcode = require('postcode'),
    Postwoman = {};

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