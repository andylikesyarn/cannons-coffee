const burgerButton = document.getElementById("burger-button");
const menuCloseIcon = document.getElementById("menu-closed");
const menuOpenIcon = document.getElementById("menu-open");
const navMenu = document.getElementById("navnavnav");

function toggleMenu() {
  menuCloseIcon.classList.toggle("visible");
  menuOpenIcon.classList.toggle("visible");
  navMenu.classList.toggle("visible");
}

burgerButton.addEventListener("click", toggleMenu);

// Set initial state
menuOpenIcon.classList.add("visible");
navMenu.classList.remove("visible");
