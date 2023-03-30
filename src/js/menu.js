//ГОРИЗОНТАЛЬНЫЙ АККОРДИОН МЕНЮ

const getItemWidth = (item) => {
  let resultWidth = 524;

  const windowWidth = window.innerWidth;
  const itemWidth = item.offsetWidth;

  const isTablet = window.matchMedia("(max-width: 768px)").matches;
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  if (isTablet) {
    resultWidth = windowWidth - itemWidth * itemLinks.length;
  }
  if (isMobile) {
    resultWidth = windowWidth - itemWidth;
  }
  return resultWidth;
};

const setItemWidth = (item, width) => {
  const itemContent = item.nextElementSibling;
  itemContent.style.width = `${width}px`;
};

const closeItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.remove("menu__item--active");
  item.classList.remove("menu__link--active");
  setItemWidth(item, 0);
};

const openItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.add("menu__item--active");
  item.classList.add("menu__link--active");
  const width = getItemWidth(item);
  setItemWidth(item, width);
};

itemLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    const isActive = target.classList.contains("menu__link--active");
    const activeElement = document.querySelector(".menu__link--active");

    if (target.classList.contains("menu__link") && isActive) {
      if (activeElement) {
        closeItem(item);
      }
    }
    if (target.classList.contains("menu__link") && !isActive) {
      if (activeElement) {
        itemLinks.forEach((item) => {
          closeItem(item);
        });
      }
      openItem(item);
    }
  });
});

window.addEventListener("resize", () => {
  const activeButton = document.querySelector(".menu__link--active");
  if (activeButton) {
    closeItem(activeButton);
  }
});
