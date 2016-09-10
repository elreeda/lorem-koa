const koa = require('koa')
const app = module.exports = koa()
const router = require('koa-router')({prefix: '/api'})
const routes = require('./routes/routes')


routes(router)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => console.log('Yay,  :)'))
