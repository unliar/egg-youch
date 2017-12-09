const Youch = require('youch')

module.exports = (options, app) => {
  app.loggers.coreLogger.info(`egg-youch starting`)
  const env = options.env
  const type = options.type
  return async(ctx, next) => {
    try {
      await next()
    } catch (error) {
      const errorTime = new Date().getTime()
      const youch = new Youch(error, ctx.request)
      ctx.app.emit('youch errors handler', youch, ctx, errorTime)
      if (type === 'json') {
        switch (env) {
          case "prod":
            ctx.body = options.jsonError
            break;

          default:
            ctx.body = await youch.toJSON()
            break;
        }
        return
      }

      switch (env) {
        case 'prod':
          ctx.body = options.htmlError
          break;

        default:
          ctx.body = await youch.toHTML()
          break;
      }

    }
  }
}