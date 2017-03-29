$(document).ready(function() {
  //handle the clicking of the nav links and making the proper "button" as active
  $( "li > a" ).click(function() {
    $("li > a").parent().removeClass("active");
    $( this ).parent().addClass( "active" );
  });

  //
  $('.dropdown').click(function(){
    $(this).toggleClass("open");
  });

  //handle when user hovers over link images
  $( $('img')).hover( function() {
      $( this )
        .toggleClass( "imgactive animated jello" )
    })

    //handle clicking of toggle navbar
    $('.navbar-toggle').click(function(){
      $('#navbar').toggleClass('collapse');
    });

    //opening and closing of modals
    $(".modal-button").click(function() {
      var modal = "modal"+this.id;
      $("#"+modal).show();
    });
    $(".thumbnail").click(function() {
      var idnum = $(this).attr('id').match(/[\d]/);
           $('#modal' + idnum).show();
    });
    $(".close").click(function(){
      $(".modal").hide();
    });
//modals end

  });
