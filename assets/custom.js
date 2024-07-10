$(document).ready(function() {
  $("li:first-child").addClass("first");
  $("li:last-child").addClass("last");
  $('[href="#"]').attr("href", "javascript:;");
  $('.menu-Bar').click(function() {
      $(this).toggleClass('open');
      $('.menuWrap').toggleClass('open');
  });

  /* Accordian */
   $('[data-targetit]').on('click', function(e) {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      var target = $(this).data('targetit');
      $('.' + target).siblings('[class^="box-"]').hide();
      $('.' + target).fadeIn();
  });

  /* POPUP Main */
  $('.loginUp').click(function() {
      $('.viewLogin').fadeIn();
      $('.black-overlay').fadeIn();
  });

  /* Close POPUP */
  $('.closePop,.black-overlay').click(function() {
      closePopup();
  });

  

  

   $('.main-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      fade: true,
      //autoplay:true,
      autoplayspeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 825,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },

      ]
  });

    $('.prod-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      //autoplay:true,
      autoplayspeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 825,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },

      ]
  });

   


   // Accordian
  $('.accordian h4').click(function() {
      $('.accordian li').removeClass('active');
      $(this).parent('li').addClass('active');
      $('.accordian li div').slideUp();
      $(this).parent('li').find('div').slideDown();
  });




  $('a.disclaimerAnchor').click(function() {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
  });


  $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1800, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});



});



$(window).on('load', function() {
  /* ISOTOPE RE-LAYOUT */
var $container = $('.grid');

$container.isotope({
  animationOptions: {
    duration: 500,
    easing: 'swing'
  },
  itemSelector: '.grid-item',
});
});




function closePopup() {
  $('.popup').fadeOut();
  $('body').removeClass('ovr-hiddn');
  $('.black-overlay').fadeOut();
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
      $('header').removeClass('sticky');
  } else {
      $('header').addClass('sticky');
  }
});


/* RESPONSIVE JS */
if ($(window).width() < 825) {

  $('').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

}