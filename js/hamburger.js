const burgerButton = document.getElementById("burger-button");
const menuCloseIcon = document.getElementById("menu-closed");
const menuOpenIcon = document.getElementById("menu-open");
const navMenu = document.getElementById("navbar");

function toggleMenu() {
  menuCloseIcon.classList.toggle("visible");
  menuOpenIcon.classList.toggle("visible");
  navMenu.classList.toggle("visible");
  console.log("button clicked");
}

burgerButton.addEventListener("click", toggleMenu);

// Set initial state
menuOpenIcon.classList.add("visible");
navMenu.classList.remove("visible");
