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

// переменные аккордиона команды
const teamName = document.querySelectorAll(".team__name");
const teamList = document.querySelector(".team__list");
const teamInfo = document.querySelectorAll(".team__info");
const teamListMobile = document.querySelector(".team-mobile__list");

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

// РАБОТА С ФОРМОЙ
// переменные формы
const myForm = document.querySelector(".order-form");
const btnForm = document.querySelector(".order-button__form");
const modal = document.querySelector(".modal");
const modalMessage = document.querySelector(".modal__text");
const btnModalClose = document.querySelector(".modal__btn");

btnForm.addEventListener("click", function (e) {
  e.preventDefault();

  if (validateForm(myForm)) {
    const data = {
      name: myForm.elements.name.value,
      phone: myForm.elements.phone.value,
      comment: myForm.elements.comment.value,
      to: myForm.elements.to.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.addEventListener("load", function () {
      if (xhr.response.status === 1) {
        modal.style.opacity = "1";
        modal.style.zIndex = "9999";
        modalMessage.textContent = xhr.response.message;
      }
      // // if (xhr.response.status !== 1) {
      // modalMessage.textContent = "Отправить сообщение не удалось, повторите запрос позже";
      // // console.log(xhr);
      // // }
      // console.log(xhr);
    });

    btnModalClose.addEventListener("click", function () {
      modal.style.opacity = "0";
      modal.style.zIndex = "-9000";
    });

    window.addEventListener("keydown", function (e) {
      if (e.code == "Escape") {
        modal.style.opacity = "0";
        modal.style.zIndex = "-9000";
      }
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.style.outline = "3px solid red";

    return false;
  } else {
    field.style.outline = "";
    return true;
  }
}

// МОДАЛЬНОЕ ОКНО ФОРМЫ
// const modal = document.querySelector(".modal");
// const modalMessage = document.querySelector('.modal__text');
