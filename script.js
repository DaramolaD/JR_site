
const navMenu = document.getElementById("nav_menu"),
navToggle = document.getElementById("nav_toggle"),
navClose = document.getElementById("nav_close");


/*=============== SHOW MENU ===============*/
/* validate if constant exists  */
const window_width = window.screen.availWidth <= 768;
// const wind_value = window_width <= 768;
if(navToggle && window_width) {
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu")
})
}

if(navClose) {
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav_list_item");

function linkAction() {
navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
