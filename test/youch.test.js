'use strict';

const mock = require('egg-mock');

describe('test/youch.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/youch-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, youch')
      .expect(200);
  });
});
