const User = require('../models/User')

module.exports = {
  findAll: function *(next) {
    try {
      const users = yield User.find()
      this.body = {status: 'success', data: users}
    } catch (e) {
      console.log(e)
      this.status = 500
      this.body = {status: 'error', message: 'Something went wrong.'}
    }
  },
  findOne: function *(next) {
    try {
      const user = yield User.findOne({username: this.params.username})
      if (user) {
        this.body = {status: 'success', data: user}
      } else {
        this.status = 404
        this.body = {status: 'fail', message: 'User not found.'}
      }
    } catch (e) {
      console.log(e)
      this.status = 500
      this.body = {status: 'error', message: 'Something went wrong.'}
    }
  },
  create: function *(next) {
    try {
      const created = yield User.create(this.request.body)
      this.status = 201
      this.body = {status: 'success', data: created}
    } catch (e) {
      console.log(e)
      if (e.name === 'ValidationError') {
        this.status = 400
        this.body = {status: 'fail', data: e.errors}
      } else if (e.name === 'MongoError') {
        this.status = 400
        this.body = {status: 'fail', data: e.errmsg}
      } else {
        this.status = 500
        this.body = {status: 'error', message: 'Something went wrong.'}
      }
    }
  },
  update: function *(next) {
    try {
      const updated = yield User.findOneAndUpdate({username: this.params.username}, this.request.body,  {new: true})
      if (updated) {
        this.body = {status: 'success', data: updated}
      } else {
        this.status = 404
        this.body = {status: 'fail', message: 'User not found.'}
      }
    } catch (e) {
      console.log(e)
      this.status = 500
      this.body = {status: 'error', message: 'Something went wrong.'}
    }
  },
  delete: function *(next) {
    try {
      const result = yield User.findOneAndRemove({username: this.params.username})
      if (result) {
        this.body = {status: 'success', message: `Deleted username: ${result.username}.`}
      } else {
        this.status = 404
        this.body = {status: 'fail', message: 'User not found.'}
      }
    } catch (e) {
      console.log(e)
      this.status = 500
      this.body = {status: 'error', message: 'Something went wrong.'}
    }
  }
}
