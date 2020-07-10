var hamburger = document.querySelector('.front__hamburger');
var navLinks = document.querySelector('.navigation__menu');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

})

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");


})