// ПЕРЕМЕННЫЕ
// переменные меню
let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation__link");

// пременные слайдера отзыва
const slider = document.querySelector(".reviews-card");
const sliderItems = document.querySelectorAll(".reviews-card__item");
const sliderList = document.querySelector(".reviews-card__list");
const slideControls = document.querySelectorAll(".reviews-control__item");

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

// АККАРДИОН КОМАНДЫ

// переменные аккордиона команды
const teamName = document.querySelectorAll(".team__name");
const teamList = document.querySelector(".team__list");
const teamItem = document.querySelectorAll(".team__item");
const teamInfo = document.querySelectorAll(".team__info");
const teamContent = document.querySelectorAll(".team__content");
const teamListMobile = document.querySelector(".team-mobile__list");

teamName.forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

function accordionTeam() {
  teamList.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("team__name")) {
      const worker = target.parentNode;
      const content = target.nextElementSibling;
      const contentHeight = content.firstElementChild.clientHeight;

      for (const iterator of teamInfo) {
        if (iterator !== worker) {
          iterator.classList.remove("team__item--active");
          iterator.lastElementChild.style.height = 0;
        }
      }

      if (worker.classList.contains("team__item--active")) {
        worker.classList.remove("team__item--active");
        content.style.height = 0;
      } else {
        worker.classList.add("team__item--active");
        content.style.height = contentHeight + "px";
      }
    }
  });
}

function accordionTeamMobile() {
  teamListMobile.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("team__name")) {
      const worker = target.parentNode;
      const content = target.nextElementSibling;
      const contentHeight = content.firstElementChild.clientHeight;

      for (const iterator of teamInfo) {
        if (iterator !== worker) {
          iterator.classList.remove("team__item--active");
          iterator.lastElementChild.style.height = 0;
        }
      }

      if (worker.classList.contains("team__item--active")) {
        worker.classList.remove("team__item--active");
        content.style.height = 0;
      } else {
        worker.classList.add("team__item--active");
        content.style.height = contentHeight + "px";
      }
    }
  });
}

accordionTeam();
accordionTeamMobile();
