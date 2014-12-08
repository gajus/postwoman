<!--
This file has been generated using GitDown (https://github.com/gajus/gitdown).
Direct edits to this will be be overwritten. Look for GitDown markup file under ./.gitdown/ path.
-->
<h1 id="postwoman">Postwoman</h1>

[![Travis build status](http://img.shields.io/travis/gajus/postwoman/master.svg?style=flat)](https://travis-ci.org/gajus/postwoman)
[![NPM version](http://img.shields.io/npm/v/postwoman.svg?style=flat)](https://www.npmjs.org/package/postwoman)

```js
Postwoman.validate('foo'); // false
Postwoman.validate('PE12 9PP'); // true
Postwoman.normalise('pe129pp'); // PE12 9PP
Postwoman.extract('I have been to PE12 9PP. Then I went to LE4 4DR.'); // ['PE12 9PP', 'LE4 4DR']
```

<h2 id="postwoman-extracting-postcodes">Extracting Postcodes</h2>

<h3 id="postwoman-extracting-postcodes-from-a-text-string">From a Text String</h3>

Postcodes can be extracted from a text string, e.g.

> I have been to PE12 9PP. Then I went to LE4 4DR.

Postcode matching algorithm is case sensitive, e.g. `Le4 4DR` will not be matched as a valid postcode. If input might have postcodes that have inconsistent use of lowercase/uppercase characters, cast the string to lowercase.

<h3 id="postwoman-extracting-postcodes-from-dom">From DOM</h3>

Postcodes can be extracted from DOM, e.g.

```html
<address>
    Vue West End (Leicester Square)<br>3 Cranbourn Street<br>Leicester Square<br>London<br>WC2H 7AL
</address>
```

```js
Postwoman.extract(document.querySelector('address'));
```

<h2 id="postwoman-download">Download</h2>

Download using NPM:

```sh
npm install postwoman
```