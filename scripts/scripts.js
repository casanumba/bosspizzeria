
$(document).ready(function(){

  $("#pizzabox").on('click', function() {
   $("#takeaway").slideToggle();
   $("#dinein").hide();


  });

  $("#dinnerplate").on('click', function() {
   $("#dinein").slideToggle();
         $("#takeaway").hide();

     });
    $("nav").sticky({topSpacing:0
    });

    $('nav').on('sticky-start', function() {
        $("#navlogo").show();
    });

    $('nav').on('sticky-end', function() {
        $("#navlogo").hide();
    });
    $('#navlogo').on('sticky-update', function() { console.log("Update"); });


  //For hamburgler menu: FastClick.attach(document.body);
    //to change background color: $("body").css('background-color', 'green');

});
