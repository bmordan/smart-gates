var test = require('tape')
var sounds = require('../lib/sounds')

test('Should be able to find sound files', function (t) {
  t.plan(3)
  sounds.pick(function (err, file) {
    t.ifError(err, 'no error')
    t.ok(file, 'sounds.pick() returns')
    t.equal(file.split('.').pop(), 'wav', 'a sound file')
    t.end()
  })
})

test('Should be able to play sound files', function (t) {
  t.plan(1)
  sounds.picknplay(function (err) {
    t.ifError(err, 'no error')
    t.end()
  })
})
