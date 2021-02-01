const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById('mess');
const emerror = document.getElementById('emailError');
const nameError = document.getElementById('nameError');
const button = document.getElementById('sub');
const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const messeror = document.getElementById("textareaError");

let error = 0;

email.onblur = function checkblurEmail() {
  let testemail = re.test(email.value);

  if (!testemail) {
    emerror.innerHTML = "Введіть почту";
    emerror.classList.add("error");
  }
  else if (!email.value.trim()) {
    emerror.innerHTML = "Введіть почту";
    emerror.classList.add("error");
  }
  return false;
};
email.onfocus = function checkfocusEmail() {
  
  emerror.innerHTML = "";
}

name.onblur = function checkblurName() {
  
  if (!name.value.trim()) {
    nameError.innerHTML = "Введіть ім'я";
    nameError.classList.add("error");
  }
  else if (name.value.trim().length <= 4 || name.value.trim().length >= 16) {
    nameError.innerHTML = "Ім'я занабто довге/коротке";
    nameError.classList.add("error");
  }
  return false;
}
name.onfocus = function () {
  nameError.innerHTML = "";
}
message.onblur = function () {
  
  if (!message.value.trim()) {
    messeror.innerHTML = "Введіть повідомлення";
    messeror.classList.add("error");
  }
  else if (message.value.trim().length <= 4) {
    messeror.innerHTML = "Повідомлення занабто коротке";
    messeror.classList.add("error");
  }
  
  return false;
};
message.onfocus = function () {
  messeror.innerHTML = "";
}

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  error = 0;
  
  
  if (name.value.trim().length <= 4 || name.value.trim().length >= 16) {
    nameError.innerHTML = "Ім'я занабто довге/коротке";
    nameError.classList.add("error");
    error++;
  }
  if (!name.value.trim()) {
    nameError.innerHTML = "Введіть ім'я";
    nameError.classList.add("error");
    error++;
  }
  if (!email.value.trim()) {
    emerror.innerHTML = "Введіть почту";
    emerror.classList.add("error");
    error++;
  }
  let testemail = re.test(email.value);
  
  if (!testemail) {
    emerror.innerHTML = "Введіть почту";
    emerror.classList.add("error");
    error++;
  }
  if (message.value.trim().length <= 4) {
    messeror.innerHTML = "Повідомлення занабто коротке";
    messeror.classList.add("error");
    error++;
  }
  if (message.value.trim() == "") {
    messeror.innerHTML = "Введіть повідомлення";
    messeror.classList.add("error");
    error++;
  }
  
  if (error != 0) {
    return;
  }

  this.submit();
});
