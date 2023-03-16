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

//
//
//
//
//
// let arrow = document.querySelectorAll(".slider__arrow");
// let slide = document.querySelector(".slider__list");
// let firstImg = slide.querySelectorAll(".slider__item")[0];
// let firstImgWidth = firstImg.clientWidth + 0;

// arrow.forEach(function (icon) {
//   icon.addEventListener("click", function () {
//     if (icon.id == "left") {
//       slide.scrollLeft -= firstImgWidth;
//     } else {
//       slide.scrollLeft += firstImgWidth;
//     }
//   });
// });
//
//
//
//
