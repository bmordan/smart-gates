module.exports = function (five) {
  var led = new five.Led('PI-13')
  led.blink()
}
