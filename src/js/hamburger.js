// переменные меню
let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation__link");

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
