const buttonMenu = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

buttonMenu.addEventListener("click", () => navbar.classList.toggle("active"));