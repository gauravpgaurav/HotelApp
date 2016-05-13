//var bookings = require('./autoBookings.js');
//var cities = require('./autoCities.js');
//var customers = require('./autoCustomers.js');
//var hotels = require('./autoHotels.js');
//var payments = require('./autoPayments.js');
//var rooms = require('./autoRooms.js');
//
var exec = require('child_process').exec;
var child1 = exec('node ./autoBookings.js');
var child2 = exec('node ./autoCities.js');
var child3 = exec('node ./autoCustomers.js');
var child4 = exec('node ./autoHotels.js');
var child5 = exec('node ./autoPayments.js');
var child6 = exec('node ./autoRooms.js');