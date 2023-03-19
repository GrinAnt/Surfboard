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

// СЛАЙДЕР НА SLICK
$(".single-item").slick({
  infinite: true,
  speed: 600,
  cssEase: "linear",
  swipe: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--left"></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--right"></button>',
});

// СЛАЙДЕР ОТЗЫВОВ
const slider = document.querySelector(".reviews-card");
const sliderItems = document.querySelectorAll(".reviews-card__item");
const sliderList = document.querySelector(".reviews-card__list");
const slideControls = document.querySelectorAll(".reviews-control__item");

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

$(".reviews-control__link").on("click", function (e) {
  e.preventDefault();
});

// Переключение слайдера отзывов, если бы были кнопки
// const nextSlide = document.querySelector(".reviews-card__next");
// const prevSlide = document.querySelector(".reviews-card__prev");

// nextSlide.addEventListener("click", nextSlider);
// prevSlide.addEventListener("click", prevSlider);

// function nextSlider() {
//   sliderCount++;
//   if (sliderCount >= sliderItems.length) {
//     sliderCount = 0;
//   }
//   rollSlider();
// }

// function prevSlider() {
//   sliderCount--;
//   if (sliderCount < 0) {
//     sliderCount = sliderItems.length - 1;
//   }
//   rollSlider();
// }

function rollSlider() {
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  slideControls.forEach((item) => item.classList.remove("reviews-control__item--active"));
  slideControls[index].classList.add("reviews-control__item--active");
}

slideControls.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
