module.exports = function (five) {
  var sensor = new five.Sensor('PI-23')
  sensor.on('change', function (val) {
    console.log(val)
  })
}
