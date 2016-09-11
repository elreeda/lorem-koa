const routes = require('../routes/routes')

const controllers = require('require-all')({
  dirname     :  __dirname + '/../controllers',
  filter      :  /(.+Controller)\.js$/,
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
})
const models = require('require-all')({
  dirname     :  __dirname + '/../models',
  filter      :  /(.+)\.js$/,
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
})
for (var model in models) {
  if (models.hasOwnProperty(model)) {
    global[model] = models[model]
  }
}
module.exports = (router) => {
  for (let key in routes) {
    if (routes.hasOwnProperty(key)) {
      const controller = routes[key].split('.')[0]
      const method = routes[key].split('.')[1]
      switch (key.split(' ')[0]) {
        case 'get':
          router.get(key.split(' ')[1], controllers[controller][method])
          break
        case 'post':
          router.post(key.split(' ')[1], controllers[controller][method])
          break
        case 'put':
          router.put(key.split(' ')[1], controllers[controller][method])
          break
        case 'delete':
          router.delete(key.split(' ')[1], controllers[controller][method])
          break
        default:

      }
    }
  }
  return router
}
