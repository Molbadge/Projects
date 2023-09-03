const navMenu = document.querySelector(".nav-menu");
const navi = document.querySelector(".navbar");

navMenu.addEventListener('click', ()=>{
    navi.classList.toggle('close')
})

function toMain() {
    window.location.href = "main.html";
}