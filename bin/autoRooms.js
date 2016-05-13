var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.Mongodata;
ds.automigrate('room', function(err) {
  if (err) throw err;

 var rooms = [
        {
            id : "room101",
            roomnumber : "100",
            type : "Basic",
            availability : "Y",
            hotelid : "hotel102"
        },
        {
            id : "room102",
            roomnumber : "100",
            type : "Deluxe",
            availability : "N",
            hotelid : "hotel101"
        },
        {
            id : "room103",
            roomnumber : "505",
            type : "Deluxe",
            availability : "Y",
            hotelid : "hotel103"
        }
  ];  
    
  var count = rooms.length;
    
  rooms.forEach(function(room) {
        app.models.room.create(room, function(err, model) {
              if (err) throw err;

              console.log('Created:', model);

              count--;
              if (count === 0)
                ds.disconnect();
        });
  });   
});