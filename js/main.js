// CUSTOM OWL - CAROUSEL

$(document).ready(function(){
    let owl = $('.owl-carousel').owlCarousel({
      rtl:true,
      dots:false,
      loop:true,
      margin:10,
      nav:true,
      items:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
  });

// OPEN -- CLOSE MENU

$('#chek').change(function(){
    if($(this).is(":checked")) {
        $('.nav-header').addClass('active');
    } else {
        $('.nav-header').removeClass('active');
    }
});