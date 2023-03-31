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
      // try {
      //   modal.style.opacity = "1";
      //   modal.style.zIndex = "999999";
      //   modalMessage.textContent = xhr.response.message;
      //   body.style.overflowY = "hidden";
      //   myForm.reset();
      // } catch (err) {
      // modal.style.opacity = "1";
      // modal.style.zIndex = "999999";
      // modalMessage.textContent = "Отправить сообщение не удалось, повторите запрос позже";
      // body.style.overflowY = "hidden";
      // }

      if (xhr.status === 200) {
        modal.style.opacity = "1";
        modal.style.zIndex = "999999";
        modalMessage.textContent = xhr.response.message;
        body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
        display.style.position = "fixed";
        myForm.reset();
      }
      // if (xhr.response.status === "")
      // if (xhr.status < 200)
      else {
        modal.style.opacity = "1";
        modal.style.zIndex = "999999";
        body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
        modalMessage.textContent = "Отправить сообщение не удалось, повторите запрос позже";
      }
    });

    // $.ajax("https://webdev-api.loftschool.com/sendmail")
    // .done((data) => {
    //   modal.style.opacity = "1";
    //   modal.style.zIndex = "999999";
    //   modalMessage.textContent = xhr.response.message;
    //   body.style.overflowY = "hidden";
    // })
    // .fail((err) => {
    //   modal.style.opacity = "1";
    //   modal.style.zIndex = "999999";
    //   modalMessage.textContent = "Отправить сообщение не удалось, повторите запрос позже";
    //   body.style.overflowY = "hidden";
    // });

    btnModalClose.addEventListener("click", function () {
      modal.style.opacity = "0";
      modal.style.zIndex = "-9000";
      body.style.overflow = "visible";
      display.style.overflow = "visible";
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
