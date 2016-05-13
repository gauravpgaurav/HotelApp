 $.getJSON("http://localhost:3000/api/cities", function(data) {
    $("#cityList option").remove(); // Remove all <option> child tags.
    $.each(data, function(index, item) { // Iterates through a collection
        $("#cityList").append( // Append an object to the inside of the select box
            $("<option></option>") // Yes you can do this.
                .text(item.name)
                .val(item.id)
        );
        });
    });
    
    $("#cityList").click(function(){
        $("#hotelList option").remove();
        $("#roomList option").remove();
        $(".hotel").hide();
        $(".room").hide();
    });
        
    $("#searchHotels").click(function(){
       
            var cityid = $("#cityList").val();
            $.getJSON("http://localhost:3000/api/hotels?filter[where][cityid]="+cityid, function(data) {
            $("#hotelList option").remove(); // Remove all <option> child tags.
             $(".hotel").show();
            $.each(data, function(index, item) { // Iterates through a collection
                $("#hotelList").append( // Append an object to the inside of the select box
                    $("<option></option>") // Yes you can do this.
                        .text(item.name)
                        .val(item.id)
                    );
                });
            });
        
    });
    
    $("#hotelList").click(function(){
        $("#roomList option").remove();
        $(".room").hide();
    });
        
        
    $("#searchRooms").click(function(){
        
        var hotelId = $("#hotelList").val();
        $.getJSON("http://localhost:3000/api/rooms?filter[where][hotelid]="+hotelId, function(data) {
            $("#roomList option").remove(); // Remove all <option> child tags.
            $(".room").show();
            $.each(data, function(index, item) { // Iterates through a collection
                    $("#roomList").append( // Append an object to the inside of the select box
                        $("<option></option>") // Yes you can do this.
                            .text("Room " + item.roomnumber)
                            .val(item.id)
                        );
                    });
                });
    
    });

$("#regUser").click(function(){
    
    var firstname = $("#firstname1").val();
    var lastname = $("#lastname1").val();
    var mobilenumber = $("#mobilenumber1").val();
    var email = $("#email1").val();
    var random = Math.floor(1000 + Math.random() * 9000);
    var id= "cust"+random;
    
    var customer = {id :id  , firstname:firstname , lastname:lastname , mobilenumber:mobilenumber , email:email};
    console.log(customer);
        $.ajax({
            type: "POST",
            data :JSON.stringify(customer),
            url: "http://localhost:3000/api/customers",
            contentType: "application/json"
        });
    alert("Your User ID = " + id);
});

$("#getUser").click(function(){
    
    var id = $("#id2").val();
    
     $.get("http://localhost:3000/api/customers/"+id, function(data, status){
        console.log(data);
        $("#firstname2").html(data.firstname);
        $("#lastname2").html(data.lastname);
        $("#mobilenumber2").html(data.mobilenumber);
        $("#email2").html(data.email);
         
    });
    
});
