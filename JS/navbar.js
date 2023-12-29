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

document.addEventListener('DOMContentLoaded', function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var links = document.querySelectorAll('.menu-list a');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight - 10,
                    behavior: 'smooth'
                });
            }
        });
    });
});