'use strict';

/**
 * egg-youch default config
 * @member Config#youch
 * @property {String} SOME_KEY - some description
 */
exports.youch = {
  type: 'html',
  jsonError: {
    err: 'errors'
  },
  htmlError: `<h1>errors</h1>`
};