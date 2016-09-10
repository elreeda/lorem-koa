module.exports = {
  index: function *(next){
    this.body = {ok: 'other side.'}
  }
}
