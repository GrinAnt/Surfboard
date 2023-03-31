const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

display.firstElementChild.classList.add("active");

const transition = function (sectonNum) {
  if (inScroll === false) {
    inScroll = true;
    const position = sectonNum * -100;
    const currentSection = sections.eq(sectonNum);
    const menuTheme = currentSection.attr("data-color-scheme");
    const sideMenu = $(".pagination__list");
    const humburgerColor = $(".hamburger");

    if (menuTheme === "black") {
      sideMenu.addClass("pagination__list-color--black");
      humburgerColor.addClass("hamburger-color--black");
    } else {
      sideMenu.removeClass("pagination__list-color--black");
      humburgerColor.removeClass("hamburger-color--black");
    }
    display.style.transform = `translateY(${position}%)`;
    //   sections[sectonNum].classList.add("active");
    //   sections[sectonNum].previousSibling.classList.remove("active");
    sections.eq(sectonNum).addClass("active").siblings().removeClass("active");
    setTimeout(() => {
      inScroll = false;
      sideMenu
        .find(".pagination__item")
        .eq(sectonNum)
        .addClass("pagination__link--active")
        .siblings()
        .removeClass("pagination__link--active");
    }, 1300);
  }
};

const viewportScroll = function (direction) {
  //   sections.forEach((item) => {
  //   const activeSection = sections.classList.contains("active");
  // const nextSection = activeSection.nextSibling;
  // const prevSection = activeSection.previousSibling;
  // return activeSection;
  //   });

  //   const nextSection = activeSection.nextSibling;
  //   const prevSection = activeSection.previousSibling;
  //   console.log(nextSection);

  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    transition(nextSection.index());
  }
  if (direction === "prev" && prevSection.length) {
    transition(prevSection.index());
  }
};

window.addEventListener("wheel", function (e) {
  const deltaY = e.deltaY;

  if (deltaY > 0) {
    viewportScroll("next");
  }

  if (deltaY < 0) {
    viewportScroll("prev");
  }
});

window.addEventListener("keydown", function (e) {
  //   if (e.code === "ArrowUp") {
  //     viewportScroll("prev");
  //   }
  //   if (e.code == "ArrowDown") {
  //     viewportScroll("next");
  //   }

  const tagName = e.target.tagName.toLowerCase();

  if (tagName !== "input" && tagName !== "textarea") {
    switch (e.code) {
      case "ArrowUp":
        viewportScroll("prev");
        break;

      case "ArrowDown":
        viewportScroll("next");
        break;
    }
  }
});

$("[data-scroll-to]").on("click", (e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);

  transition(reqSection.index());
});

if (isMobile) {
  $(function () {
    $("body").swipe({
      swipe: function (event, direction) {
        let scrollDirect = "";

        if (direction === "up") scrollDirect = "next";
        if (direction === "down") scrollDirect = "prev";

        viewportScroll(scrollDirect);
      },
    });
  });
}
