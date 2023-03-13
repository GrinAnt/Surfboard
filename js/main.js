// ПЕРЕМЕННЫЕ
let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");

// МЕНЮ ГАМБУРГЕР И ПОЯВЛЕНИЕ МЕНЮ
hamburger.addEventListener("click", function (event) {
  hamburger.classList.toggle("hamburger--active");
  navigation.classList.toggle("navigation--active");
});

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
