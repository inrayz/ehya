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
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.stories-slider-button--next',
    prevEl: '.stories-slider-button--prev', 
    disabledClass: 'stories-slider-button--disabled',
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
  $(".subscribe__form").validate({
    errorClass: "invalid",
     messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    },
  });

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке');
  document.querySelector(".navbar-menu").classList.toggle('navbar-menu--visible')
})

var closeNavbar = document.querySelector(".navbar-menu__close--visible");
closeNavbar.addEventListener('click', function () {
  console.log('Клик по кнопке закрыть');
  document.querySelector(".navbar-menu").classList.toggle('navbar-menu--visible')
})

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}

$(document).keyup(function(esc) {
    if (esc.which == 27) {
      $(".modal__overlay").removeClass("modal__overlay--visible")
      $(".modal__dialog").removeClass("modal__dialog--visible")
  }
});  

document.addEventListener('click', function (e) {
  // console.log(e.target.classList.value);
  var click = e.target.classList.value;
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  if (click === 'modal__overlay modal__overlay--visible') {
    modalDialog.removeClass('modal__dialog--visible');
    modalOverlay.removeClass('modal__overlay--visible');
  };
});


$('body').on('click', '.password-checkbox', function(){
	if ($(this).is(':checked')){
		$('#password-input').attr('type', 'text');
	} else {
		$('#password-input').attr('type', 'password');
	}
});

$(".modal__form").validate({
     messages: {
      login: {
        required: "Введите логин",
        minlenght: "Логин должен быть не менее 5 символов"
      },
      password:{
        required: "Введите пароль",
        minlenght: "Пароль должен быть не менее 6 символов"
      },
    },
  });
 
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});  
$(document).ready(function(){
    $("#to-top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
});


// var buttonNext = document.querySelector(".stories-slider__button--next");
// buttonNext.addEventListener('click', function () {
//   console.log('Клик по кнопке');
//   document.querySelector(".stories-slider__button").classList.toggle('stories-slider__button--prev')
//   document.querySelector(".stories-slider__button").classList.remove('stories-slider__button--prev--disabled')
// }) 