const UserControllers = require('../controllers/UserControllers')

module.exports = (router) => {
  router
    .get('/users', UserControllers.findAll)
    .get('/users/:username', UserControllers.findOne)
    .post('/users', UserControllers.create)
    .put('/users/:username', UserControllers.update)
    .delete('/users/:username', UserControllers.delete)
}
