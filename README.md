# uglify-register <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][9]][1]

Use this require hook to uglify JS files on-the-fly.

This is particularly useful when trying to replicate production minification effects in a dev or test environment.

Not recommended for a production environment, like all require hooks.

## Install

```sh
npm install --save-dev uglify-register
```

## Usage

With no extra uglify options; only for the `.js` extension; for all files:
```js
require('uglify-register');
```

With custom [uglify options](https://www.npmjs.com/package/uglify-js#api-reference):
```js
require('uglify-register/api')({
	uglify: {
		mangle: true // for example
	},
});
```

With custom file extensions:
```js
require('uglify-register/api')({
	extensions: ['.js', '.jsx'], // defaults to just ".js" if omitted
});
```

Excluding files that match provided regular expressions:
```js
require('uglify-register/api')({
	exclude: [
		/\/node_modules\/, // third-party code
		/\/test\//, // code under a "test" dir
		\/some-special-file.js$\/, // some file
	],
});
```

All options can of course be combined.

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/uglify-register
[2]: http://versionbadg.es/ljharb/uglify-register.svg
[3]: https://travis-ci.org/ljharb/uglify-register.svg
[4]: https://travis-ci.org/ljharb/uglify-register
[5]: https://david-dm.org/ljharb/uglify-register.svg
[6]: https://david-dm.org/ljharb/uglify-register
[7]: https://david-dm.org/ljharb/uglify-register/dev-status.svg
[8]: https://david-dm.org/ljharb/uglify-register#info=devDependencies
[9]: https://nodei.co/npm/uglify-register.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/uglify-register.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/uglify-register.svg
[downloads-url]: http://npm-stat.com/charts.html?package=uglify-register
