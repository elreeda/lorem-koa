const IndexControllers = require('../controllers/IndexControllers')

module.exports = (router) => {
  router
    .get('/one', function *(next) {
      this.body = 'one'
    })
    .get('/two', function *(next) {
      this.body = 'two'
    })
    .get('/test', IndexControllers.index)
}
