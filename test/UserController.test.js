const app = require('../app')
const request = require('supertest').agent(app.listen())

describe('Simple CRUD', () => {
  it('create new user', (done) => {
    request
    .post('/api/users')
    .send({
      username: 'reda',
      password: 'koa'
    })
    .expect(201, done)
  })

  it('create another user', (done) => {
    request
    .post('/api/users')
    .send({
      username: 'reda',
      password: 'koa',
      noice: 'guy'
    })
    .expect(400, done)
  })

  it('find all users', (done) => {
    request
    .get('/api/users')
    .expect(200, done)
  })

  it('find one unexisted user', (done) => {
    request
    .get('/api/users/sdq')
    .expect(404, done)
  })

  it('update user by name', (done) => {
    request
    .put('/api/users/reda')
    .send({
      password: 'awk'
    })
    .expect(200, done)
  })

  it('update unexisted user', (done) => {
    request
    .put('/api/users/res')
    .send({
      password: 'cyka'
    })
    .expect(404, done)
  })

  it('delete user', (done) => {
    request
    .delete('/api/users/reda')
    .expect(200, done)
  })

  it('delete the deleted user', (done) => {
    request
    .delete('/api/users/reda')
    .expect(404, done)
  })
})
