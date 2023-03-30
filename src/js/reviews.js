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
