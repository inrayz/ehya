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
});

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



