const app = require('../app')
const request = require('supertest').agent(app.listen())

describe('Simple HTTP Test request', () => {
  it('return not found', (done) => {
    request
    .get('/test')
    .expect(404, done)
  })

  it('return 200', (done) => {
    request
    .get('/api/test')
    .expect(200, done)
  })
})
