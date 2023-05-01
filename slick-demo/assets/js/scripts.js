//Alternate Configuation Options Here - https://accessible360.github.io/accessible-slick/#demos
$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    //multiple items
    //$('.multiple-items').slick({
  //infinite: true,
  //slidesToShow: 3,
  //slidesToScroll: 3
//});
});