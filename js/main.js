// ПЕРЕМЕННЫЕ
let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation__link");

// МЕНЮ ГАМБУРГЕР И ПОЯВЛЕНИЕ МЕНЮ
hamburger.addEventListener("click", function (event) {
  hamburger.classList.toggle("hamburger--active");
  navigation.classList.toggle("navigation--active");
});

// закрытие меню при нажатии на один из пунктов меню
link.forEach(function (e) {
  e.addEventListener("click", function () {
    if (hamburger.classList.contains("hamburger--active")) {
      hamburger.classList.remove("hamburger--active");
      navigation.classList.remove("navigation--active");
    }
  });
});

// слайдер на slick
$(".single-item").slick({
  infinite: true,
  speed: 600,
  cssEase: "linear",
  swipe: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--left"></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--right"></button>',
});
