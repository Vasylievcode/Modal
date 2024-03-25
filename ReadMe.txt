const modal = document.querySelector(".modal");
const form = document.querySelector(".modal-content");
const login_btn = document.querySelector("#login_btn");
const cancle_btn = document.querySelector(".cancelbtn");
const closeModal_btn = document.querySelector(".close");

// function which you should add to event listener as callback
function handleFormOpen() {
    modal.style.display = "block";
}
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      modal.style.display = 'none';
    }
  });


function handleFormClose(event) {
    modal.style.display = "none"
    
}
function handleFormSubmit(event) {
    event.preventDefault();
    const registerForm = event.target;
    const name = registerForm.elements.name.value;
    const password = registerForm.elements.password.value;
    console.log(`Name: ${name}, Password: ${password}`);
    registerForm.reset();
    handleFormClose()
}

login_btn.addEventListener("click",handleFormOpen)
closeModal_btn.addEventListener("click",handleFormClose)
cancle_btn.addEventListener("click",handleFormClose)
form.addEventListener("submit", handleFormSubmit)