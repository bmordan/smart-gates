var sounds = require('./sounds')

module.exports = function (five) {
  var sensor = new five.Sensor('PI-23')
  sensor.on('change', function (val) {
    console.log(val)
    if (val > 1000) sounds.picknplay()
  })
}
