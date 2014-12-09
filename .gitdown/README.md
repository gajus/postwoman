# Postwoman

{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "npm-version"}
{"gitdown": "badge", "name": "bower-version"}

```js
Postwoman.validate('foo'); // false
Postwoman.validate('PE129PP'); // true
Postwoman.validate('PE12 9PP'); // true
Postwoman.normalise('pe129pp'); // PE12 9PP
Postwoman.match('PE12 9PP; LE4 4DR; PE12 9PP'); // ['PE12 9PP', 'LE4 4DR']
Postwoman.match('<p>PE12 9PP<br>LE4 4DR<br>PE12 9PP</p>'); // ['PE12 9PP', 'LE4 4DR']
```

## Postcode Validation

Validation is performed using a regular expression. Regular expression is tested against [all UK postcodes](https://github.com/gajus/postwoman/blob/master/tests/fixtures/valid.csv).

If you have found a postcode that erroneously does not pass validation, please validate it against http://www.royalmail.com/find-a-postcode and [submit an issue](https://github.com/gajus/postwoman/issues).

### Case Sensitivity

Postcode validation regex is case sensitive. It will match postcode that contains either all upper case or all lower case letters, e.g. "ee12 9PP" will not match, "PE12 9PP" will match, "pe12 9pp" will match.

## Normalisation

Postcode normalisation makes postcode uppercase and space-separates outward and inward codes.

If input is an invalid postcode, an error will be thrown.

## Matching

Postcode matching is using postcode validation rules to match postcodes in a string.

Returned postcodes are normalised and unique.

## Download

Download using NPM:

```sh
npm install postwoman
```