// We initialise document ready so things don't happen until the document is ready.
$(document).ready(function(){

  // When we click the pizza box we are going to toggle the dine in section.
  $("#pizzabox").on('click', function() {
    $("#takeaway").slideToggle();
    $("#dinein").hide();
  });

  // When we click the dinnerplate, we are going to toggle the dine in section and hide the takeaway section.
  $("#dinnerplate").on('click', function() {
    $("#dinein").slideToggle();
    $("#takeaway").hide();
  });

  // Use the stick library to make the nav slide to the sections with a little offset.
  $('nav').sticky({
    topSpacing:0
  });

  // Use the scrollomatic plugin for smooth scrolling.
  $('nav a').scrollomatic({
    duration: 300
  });

  
  // Once the nav is scrolling through the page we want to show the nav logo.
  $('nav').on('sticky-start', function() {
    $("#navlogo").show('fast');
  });

  // Once the nav has stopped scrolling around we hide the nav logog.
  $('nav').on('sticky-end', function() {
    $("#navlogo").hide('fast');
  });

  //For hamburgler menu: FastClick.attach(document.body);
  //to change background color: $("body").css('background-color', 'green');

});
