# Postwoman

{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "npm-version"}

```js
Postwoman.validate('foo'); // false
Postwoman.validate('PE12 9PP'); // true
Postwoman.normalise('pe129pp'); // PE12 9PP
Postwoman.extract('I have been to PE12 9PP. Then I went to LE4 4DR.'); // ['PE12 9PP', 'LE4 4DR']
```

## Extracting Postcodes

### Extracting From a Text String

Postcodes can be extracted from a text string, e.g.

> 'I have been to PE12 9PP. Then I went to LE4 4DR.'

Postcode matching algorithm is case sensitive, e.g. `Le4 4DR` will not be matched as a valid postcode. If input might have postcodes that have inconsistent use of lowercase/uppercase characters, cast the string to lowercase.

### Extracting From DOM

Postcodes can be extracted from DOM, e.g.

```html
<address>
    Vue West End (Leicester Square)<br>3 Cranbourn Street<br>Leicester Square<br>London<br>WC2H 7AL
</address>
```

```js
Postwoman.extract(document.querySelector('address'));
```

## Download

Download using NPM:

```sh
npm install postwoman
```