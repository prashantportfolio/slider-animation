jQuery(document).ready(function(){
  $('.puma-and-logo').delay(7000).fadeOut();
  
  setTimeout(function(){
    $('.bubble.big-green-bubble').animate({right: "373px", opacity: "1"}, 5000);
    $('.bubble.big-white-bubble').delay(1010).animate({left: "140px", opacity: "1"},4000);
    $('.slider-section').delay(3000).animate({bottom: "0px"},1500);
    $('.bubble.first-bubble').delay(3000).animate({top: "0%"},1000);
    $('.bubble.second-bubble').delay(3000).animate({left: "-100px"},1000);
    $('.side-bubble-wrapper, .swiper-pagination, .tagline, .shop-now').delay(4000).fadeIn(1000);

    $('.swiper-pagination-bullet').on('click', function(){
      var index = $('.swiper-pagination-bullet').index($(this));
      changeSliderContent(index);
    });

    if($(window).width() < 769) {
      $('.bubble.big-pink-bubble').animate({left: "206px", opacity: "1"}, 5000);
      $('.green-bubble-text').animate({left: "50%", opacity: "0.8"},4000).fadeOut();
      $('.pink-bubble-text').animate({right: "50%", opacity: "0.8"},4000).fadeOut();
    } else {
      $('.bubble.big-pink-bubble').animate({left: "374px", opacity: "1"}, 5000);
      $('.green-bubble-text').animate({left: "0px", opacity: "0.8"},4000).fadeOut();
      $('.pink-bubble-text').animate({right: "0px", opacity: "0.8"},4000).fadeOut();
    }

  }, 3000);

});