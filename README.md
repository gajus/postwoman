<!--
This file has been generated using GitDown (https://github.com/gajus/gitdown).
Direct edits to this will be be overwritten. Look for GitDown markup file under ./.gitdown/ path.
-->
<h1 id="postwoman">Postwoman</h1>

[![Travis build status](http://img.shields.io/travis/gajus/postwoman/master.svg?style=flat)](https://travis-ci.org/gajus/postwoman)
[![NPM version](http://img.shields.io/npm/v/postwoman.svg?style=flat)](https://www.npmjs.org/package/postwoman)

```js
Postwoman.validate('foo'); // false
Postwoman.validate('PE129PP'); // true
Postwoman.validate('PE12 9PP'); // true
Postwoman.normalise('pe129pp'); // PE12 9PP
Postwoman.match('I have been to PE12 9PP. Then I went to LE4 4DR. Did I say we went to PE12 9PP?'); // ['PE12 9PP', 'LE4 4DR']
```

<h2 id="postwoman-postcode-validation">Postcode Validation</h2>

Validation is performed using a regular expression. Regular expression is tested against [all UK postcodes](https://github.com/gajus/postwoman/blob/master/tests/fixtures/valid.csv).

If you have found a postcode that erroneously does not pass validation, please validate it against http://www.royalmail.com/find-a-postcode and [submit an issue](https://github.com/gajus/postwoman/issues).

<h3 id="postwoman-postcode-validation-case-sensitivity">Case Sensitivity</h3>

Postcode validation regex is case sensitive. It will match postcode that contains either all upper case or all lower case letters, e.g. "ee12 9PP" will not match, "PE12 9PP" will match, "pe12 9pp" will match.

<h2 id="postwoman-normalisation">Normalisation</h2>

Postcode normalisation makes postcode uppercase and space-separates outward and inward codes.

If input is an invalid postcode, an error will be thrown.

<h2 id="postwoman-matching">Matching</h2>

Postcode matching is using postcode validation rules to match postcodes in a string.

Returned postcodes are normalised and unique.

<h2 id="postwoman-download">Download</h2>

Download using NPM:

```sh
npm install postwoman
```