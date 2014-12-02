# Postwoman

{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "npm-version"}

```js
Postwoman.validate('foo'); // false
Postwoman.validate('PE12 9PP'); // true
Postwoman.normalise('pe129pp'); // PE12 9PP
Postwoman.extract('I have been to PE12 9PP. Then I went to LE4 4DR.'); // ['PE12 9PP', 'LE4 4DR']
```

## Download

Download using NPM:

```sh
npm install postwoman
```