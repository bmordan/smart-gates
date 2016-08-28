var fs = require('fs')
var path = require('path')
var sample = require('lodash.sample')
var player = require('play-sound')({})

function readDir (cb) {
  fs.readdir(path.join(__dirname, '..', 'sounds'), function (err, files) {
    if (err) return cb(err)
    cb(null, sample(files))
  })
}

function pick (cb) { readDir(cb) }
function play (file, cb) { player.play(path.join(__dirname, '..', 'sounds', file), cb) }

function picknplay (cb) {
  if (!cb) cb = function () {}
  pick(function (err, file) {
    if (err) return cb(err)
    play(file, cb)
  })
}

module.exports = {
  pick: pick,
  play: play,
  picknplay: picknplay
}
