const UserController = require('../controllers/UserController')

module.exports = (router) => {
  router
    .get('/users', UserController.findAll)
    .get('/users/:username', UserController.findOne)
    .post('/users', UserController.create)
    .put('/users/:username', UserController.update)
    .delete('/users/:username', UserController.delete)
}
