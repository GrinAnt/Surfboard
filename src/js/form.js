// переменные формы
const myForm = document.querySelector(".order-form");
const btnForm = document.querySelector(".order-button__form");
const modal = document.querySelector(".modal");
const modalMessage = document.querySelector(".modal__text");
const btnModalClose = document.querySelector(".modal__btn");
const body = document.querySelector(".body");

// РАБОТА С ФОРМОЙ
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
        body.style.overflow = "hidden";
      }
      if (xhr.response.status === "") {
        modalMessage.textContent = "Отправить сообщение не удалось, повторите запрос позже";
      }
    });

    btnModalClose.addEventListener("click", function () {
      modal.style.opacity = "0";
      modal.style.zIndex = "-9000";
      body.style.overflow = "visible";
    });

    window.addEventListener("keydown", function (e) {
      if (e.code == "Escape") {
        modal.style.opacity = "0";
        modal.style.zIndex = "-9000";
        body.style.overflow = "visible";
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
