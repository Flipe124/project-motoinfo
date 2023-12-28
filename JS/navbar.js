const buttonMenu = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

buttonMenu.addEventListener("click", () => navbar.classList.toggle("active"));

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});