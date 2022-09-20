$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$('.brand-wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: false,
  prevArrow: false,
  pauseOnHover: false,
  responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      }
    },

    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      }
    },

  ]

});

$('.eng-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '.right-arrow',
  prevArrow: '.left-arrow',
  pauseOnHover: false,
  appendArrows: false,
  responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },

  ]

});
$('.btt').on('click', function(){
  $('html,body').animate( {scrollTop:0},1000)
});

$(window).on('scroll', function(){
  var scroll =$(this).scrollTop()
  if (scroll > 50){
    $('.btt').fadeIn(500)
  }
  else {
    $('.btt').fadeOut(500)
  }
  if (scroll > 100){
    $('.navbar').addClass('sticky-menu')
  }
  else {
    $('.navbar').removeClass('sticky-menu')
  }
})