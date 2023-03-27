// переменные аккордиона команды
const teamName = document.querySelectorAll(".team__name");
const teamList = document.querySelector(".team__list");
const teamInfo = document.querySelectorAll(".team__info");
const teamListMobile = document.querySelector(".team-mobile__list");

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
