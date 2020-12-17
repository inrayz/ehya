var mySwiper = new Swiper('.reviews-slider', {
  autoplay: {
    delay: 7000,
    disableOnInteraction: false, 
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
var mySwiper = new Swiper('.stories-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.stories__button--next',
    prevEl: '.stories__button--prev',
  },
})


$(document).ready(function () {
  var trendingLink = $(".trending__link");
  var cardWrapper = $(".card-wrapper");

  trendingLink.on('click', function (event) {
    var activeWrapper = $(this).attr("data-target");
    trendingLink.removeClass("trending__link_active");
    cardWrapper.removeClass("card-wrapper__active");
    $(activeWrapper).addClass("card-wrapper__active");
    $(this).addClass("trending__link_active");
  });
  $(".subscribe__form").validate({
    errorClass: "invalid",
     messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    },
  });
});





