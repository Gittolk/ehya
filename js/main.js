$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  // меню бургер
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("lock");
  });
  // модальное окно
  var modalButton = $("[data-toggle = modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").addClass("lock");
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        closeModal(event);
      }
    });
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    var startScroll = $("body");
    startScroll.removeClass("lock");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter Your Name*",
          minlength: "Name will be 3th simbols",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter Your phone number",
        },
      },
    });
  });
  // маска номера телефона
  $(".phone").mask("+7(999)-999-99-99");
  // открытие карты за картинкой
  $(".map").mouseover(function () {
    console.log("12321");
    var mapImage = $(".map__image");
    var mapGoogle = $(".map__google");
    mapImage.addClass("map__image_script");
    mapGoogle.addClass("map__google_googleScript");
  });
  $(".header-burger").click(function (e) {
    $(".header-burger").toggleClass("header-burger--active");
    $(".header-burger__line").toggleClass("header-burger--active__line");
    $(".header-menu").toggleClass("header-menu--active");
    $(".header__logo").toggleClass("header__logo--active");
    $("body").toggleClass("lock");
  });
  $(document).ready(function () {
    var tabsItem = $(".tabs__item");
    var contentItem = $(".tranding-images");
    tabsItem.on("click", function (event) {
      var activeContent = $(this).attr("data-target");
      tabsItem.removeClass("tabs__item--active");
      contentItem.removeClass("tranding-images--active");
      $(activeContent).addClass("tranding-images--active");
      $(this).addClass("tabs__item--active");
    });
  });

  var mySwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    touchMoveStopPropagation: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    autoplay: {
      delay: 3000,
    },
  });
  $(".reviews-slider").mousemove(function (event) {
    console.log("123");
    mySwiper.autoplay.stop();
  });
  $(".reviews-slider").mouseout(function (event) {
    console.log("555");
    mySwiper.autoplay.start();
  });
});
