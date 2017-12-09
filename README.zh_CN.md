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

## 依赖说明

### 依赖的 egg 版本

egg-youch 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.youch = {
  enable: true,
  package: 'egg-youch',
};
```

```js
// {app_root}/config/config.default.js
exports.youch = {
   env:'local', // prod 切换为生产
   type: 'html',// json 切换json响应
   jsonError: {
    err: 'errors'
   },
   htmlError: `<h1>errors</h1>`
};
```
## 使用场景

- 为了在开发或者测试的时候使得报错信息更加友好。
尽可能描述详细。
- How: *请在正式环境配置env为prod,否则错误信息或者代码有被视奸的风险*,。


## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
