var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.Mongodata;
ds.automigrate('customer', function(err) {
  if (err) throw err;

  var customers = [
        {
            id : "cust101",
            firstname : "Gaurav",
            lastname : "Pant",
            mobilenumber : "9740591222",
            email : "gpant@sapient.com"
        },
        {
            id : "cust102",
            firstname : "Dhawal",
            lastname : "Singhal",
            mobilenumber : "9740591333",
            email : "dsin51@sapient.com"
        },
        {
            id : "cust103",
            firstname : "ABC",
            lastname : "XYZ",
            mobilenumber : "9734591113",
            email : "axyz@sapient.com"
        }
  ]; 
    
  var count = customers.length;
    
  customers.forEach(function(customer) {
        app.models.customer.create(customer, function(err, model) {
              if (err) throw err;

              console.log('Created:', model);

              count--;
              if (count === 0)
                ds.disconnect();
        });
  });   
});