$(document).ready(function() {
  //handle the scrolling
  $(document).on("scroll", function(){
      //position is the current position of the scroll
    var position = Math.round($(window).scrollTop());

      //var position = $(window).scrollTop();
      if(position < $('#about').offset().top + $('#about').height()){
        $("ul li").removeClass("active")
        $("ul li:nth-child(1)").addClass("active");
      }else if(position < $('#portfolio').offset().top + $('#portfolio').height()){
        $("ul li").removeClass("active")
        $("ul li:nth-child(2)").addClass("active");
      }else if(position < $('#weather').offset().top + $('#weather').height()){
        $("ul li").removeClass("active")
        $("ul li:nth-child(3)").addClass("active");
      }else if(position <$('#contact').offset().top + $('#contact').height()){
        $("ul li").removeClass("active")
        $("ul li:nth-child(4)").addClass("active");
      }
      });

  //handle the clicking of the nav links and making the proper "button" as active
  $( "li > a" ).click(function() {
    $("li > a").parent().removeClass("active");
    $( this ).parent().addClass( "active" );
  });

  //handle when user hovers over link images
  $( $('a img')).hover( function() {
      $( this )
        .toggleClass( "imgactive animated jello" )
    })

    //handle clicking of toggle navbar
    $('.navbar-toggle').click(function(){
      $('#navbar').toggleClass('collapse');
    });

    //weather info
    $.get("//ipinfo.io", function(response) {
    var url2 = url + response.city;
    $.getJSON(url2,myCallback, 'jsonp');
}, "jsonp");

    $("#temp").click(function() {
      if(isFahrenheit){
        $("#temp").html(ctemp +"&ordm;C");
        isFahrenheit = false;
      }else{
        $("#temp").html(ftemp +"&ordm;F");
        isFahrenheit = true;
      }

});

  });


//functions for weather
var isFahrenheit = true;
var ftemp;
var ctemp;
var url="//api.apixu.com/v1/current.json?key=727bca30b78a41bb9da55855171101&q=";

var myCallback = function(data) {
//data from api
  ftemp = data.current.temp_f;
  ctemp = data.current.temp_c;
  $("#location").text(data.location.name);

  $("#temp").html(ftemp +"&ordm;F");
  $("#description").text(data.current.condition.text);
  $("#icon").attr("src",data.current.condition.icon);
};
