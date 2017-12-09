# egg-youch

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-youch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-youch
[travis-image]: https://img.shields.io/travis/eggjs/egg-youch.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-youch
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-youch.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-youch?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-youch.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-youch
[snyk-image]: https://snyk.io/test/npm/egg-youch/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-youch
[download-image]: https://img.shields.io/npm/dm/egg-youch.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-youch

<!--
Description here.
-->

## Install

```bash
$ npm i egg-youch --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.youch = {
  enable: true,
  package: 'egg-youch',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.youch = {
   env:'local',
   type: 'html',
   jsonError: {
    err: 'errors'
   },
   htmlError: `<h1>errors</h1>`
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
> when *config.env*==="prod" the response body will be config.jsonError or config.htmlError to provent error messages show to users.
> when *config.env*='local' or else,the response body will contains error messages 

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
