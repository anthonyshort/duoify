var walk = require('falafel')
var through = require('through2')

module.exports = function (file) {
  return through(function (buf, enc, next) {
    var output = walk(buf.toString('utf8'), function (node) {
      if (node.type === 'Identifier' && node.name === 'require') {
        node.update('_require')
      }
    })
    this.push(output.toString())
    next()
  })
}