// Викоритовуй шаблон модального вікна вище

// По кліку на login_btn відкрий модальне вікно змінивши стиль модалки з display: "none" на display: "block" 
// Отримай дані з форми по події submit, виводь дані у консоль і закривай модалку попередньо очистивши форму від введених даних.
// При кліку на хрестик чи по кнопці cancel закривай модалку змінивши стиль з display: "block" на display: "none" 
// Якщо користувач натиснув не на модалку, а на задній фон, також закривай модалку
// Якщо користувач натиснув ESC також закривай модалку
// refs
// const modal = ...;
// const form = ...;
// const login_btn = ...;
// const cancle_btn = ...;
// const closeModal_btn = ...;

// // function which you should add to event listener as callback
// function handleFormOpen() {}
// function handleFormClose() {}
// function handleFormSubmit() {}

// refs
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal-content");
const loginBtn = document.querySelector("#login_btn");
const cancelBtn = document.querySelector(".cancelbtn");
const closeModalBtn = document.querySelector(".close");

// function which you should add to event listener as callback
function handleFormOpen(event) {
  modal.classList.add("modal-closed")
}
function handleFormClose(event) {
  modal.classList.remove("modal-closed")
}
function handleFormSubmit(event) {
  event.preventDefault();
  // console.log("target",event.target)
  // console.log("currentTraget",event.currentTarget)
  const registerForm = event.target;
  const name = registerForm.elements.name.value;
  const password = registerForm.elements.password.value;
  console.log(`Name: ${name}, Password: ${password}`);
  registerForm.reset();
  handleFormClose()
}

// const onLoginBtnClick = loginBtn.addEventListener("click", handleFormOpen )
// const onCloseModalBtnClick = closeModalBtn.addEventListener("click",handleFormClose )
// const onCancelBtnClick = cancelBtn.addEventListener("click", handleFormClose)

loginBtn.addEventListener("click", handleFormOpen )
closeModalBtn.addEventListener("click",handleFormClose )
cancelBtn.addEventListener("click", handleFormClose)
form.addEventListener("submit", handleFormSubmit)