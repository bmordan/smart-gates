var five = require('johnny-five')
var Raspi = require('raspi-io')
var board = new five.Board({ io: new Raspi() })
var startGate = require('./gate')

board.on('ready', startGate.bind(null, five))
