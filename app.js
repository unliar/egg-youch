module.exports = app => {
  //插入到中间件最外层
  app.config.coreMiddleware.unshift('youch')
}