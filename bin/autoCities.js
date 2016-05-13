var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.Mongodata;
ds.automigrate('city', function(err) {
  if (err) throw err;

  var cities = [
        {
            id : "city101",
            name : "New Delhi",
            state : "Delhi",
            country : "India"
        },
        {
            id : "city102",
            name : "Manipal",
            state : "Karnataka",
            country : "India"
        },
        {
            id : "city104",
            name : "Jaipur",
            state : "RJ",
            country : "India"
        }
  ]; 
  var count = cities.length;
    
  cities.forEach(function(city) {
        app.models.city.create(city, function(err, model) {
              if (err) throw err;

              console.log('Created:', model);

              count--;
              if (count === 0)
                ds.disconnect();
        });
  });   
});