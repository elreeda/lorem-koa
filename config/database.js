const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = () => {
  mongoose.connect('mongodb://localhost/koaDB', (err) => {
    if (err) { console.log(err) }
  })
}
