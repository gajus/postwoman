# Postwoman

{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "npm-version"}

```js
Postwoman.validate('foo'); // false
Postwoman.validate('PE12 9PP'); // true
Postwoman.normalise('pe129pp'); // PE12 9PP
Postwoman.match('I have been to PE12 9PP. Then I went to LE4 4DR.'); // ['PE12 9PP', 'LE4 4DR']
```

## Postcode Validation

Validation is performed using a regular expression. Regular expression is tested against [all UK postcodes](https://github.com/gajus/postwoman/blob/master/tests/fixtures/valid.csv).

If you have found a postcode that erroneously does not pass validation, please validate it against http://www.royalmail.com/find-a-postcode and [submit an issue](https://github.com/gajus/postwoman/issues).

### Case Sensitivity

Postcode validation regex is case sensitive. It will match postcode that contains either all upper case or lower case letters, e.g. "ee12 9PP" will not match, "PE12 9PP" will match, "pe12 9pp" will match.

## Download

Download using NPM:

```sh
npm install postwoman
```