var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.Mongodata;
ds.automigrate('hotel', function(err) {
  if (err) throw err;

  var hotels = [
        {
            id : "hotel101",
            name : "Shangri La",
            rating : "4",
            cityid : "city101"
        },
        {
            id : "hotel102",
            name : "Fortune Valley",
            rating : "3",
            cityid : "city102"
        },
        {
            id : "hotel103",
            name : "Oberoi",
            rating : "5",
            cityid : "city103"
        }
  ]; 
    
  var count = hotels.length;
    
  hotels.forEach(function(hotel) {
        app.models.hotel.create(hotel, function(err, model) {
              if (err) throw err;

              console.log('Created:', model);

              count--;
              if (count === 0)
                ds.disconnect();
        });
  });   
});