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

<h2 id="postwoman-download">Download</h2>

Download using NPM:

```sh
npm install postwoman
```