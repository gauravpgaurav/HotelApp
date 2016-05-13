var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.Mongodata;
ds.automigrate('booking', function(err) {
  if (err) throw err;

  var bookings = [
        {
            id : "book101",
            roomid : "room103",
            custid : "cust103",
            checkin_date : "12-05-16",
            checkout_date : "14-05-16",
            booking_date : "10-05-16"
        },
        {
            id : "book102",
            roomid : "room102",
            custid : "cust102",
            checkin_date : "01-06-16",
            checkout_date : "25-06-16",
            booking_date : "19-05-16"
        },
        {
            id : "book103",
            roomid : "room101",
            custid : "cust101",
            checkin_date : "01-06-16",
            checkout_date : "15-06-16",
            booking_date : "12-05-16"
        }
  ];
    
  var count = bookings.length;
    
  bookings.forEach(function(booking) {
        app.models.booking.create(booking, function(err, model) {
              if (err) throw err;

              console.log('Created:', model);

              count--;
              if (count === 0)
                ds.disconnect();
        });
  });   
});