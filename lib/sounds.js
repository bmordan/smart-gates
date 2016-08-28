var fs = require('fs')
var path = require('path')
var pick = require('lodash.sample')

function readDir (cb) {
  fs.readdir(path.join(__dirname, '..', 'sounds'), function (err, files) {
    if (err) return cb(err)
    cb(null, pick(files))
  })
}

module.exports.pick = function (cb) {
  readDir(cb)
}
