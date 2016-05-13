var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.Mongodata;
ds.automigrate('payment', function(err) {
  if (err) throw err;

  var payments = [
        {
            id : "pay101",
            bookingid : "book101",
            custid : "cust103",
            cost : "10000"
        },
        {
            id : "pay102",
            bookingid : "book102",
            custid : "cust102",
            cost : "30000"
        },
        {
            id : "pay103",
            bookingid : "book101",
            custid : "cust101",
            cost : "4000"
        }
  ];
    
  var count = payments.length;
    
  payments.forEach(function(payment) {
        app.models.payment.create(payment, function(err, model) {
              if (err) throw err;

              console.log('Created:', model);

              count--;
              if (count === 0)
                ds.disconnect();
        });
  });   
});