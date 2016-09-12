const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = module.exports = koa()
const router = require('koa-router')({prefix: '/api'})
const db = require('./config/database')()
const routes = require('./routes/routes')

routes(router)
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => console.log('Yay,  :)'))
