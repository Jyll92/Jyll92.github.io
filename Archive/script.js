const navIcon = document.querySelector(".navIcon");
const navMenu = document.querySelector(".navMenu");
const navBar = document.querySelector(".navBar");

const newNavIcon = document.querySelector(".newNavIcon");
const newNavBar = document.querySelector(".newBar");
const newNavMenu = document.querySelector(".newMenu");
const newNavLogo = document.querySelector(".indLogo");

navIcon.addEventListener("click", () => {
  navMenu.classList.toggle("navShow");
  navIcon.classList.toggle("open");
  navBar.classList.toggle("navTransition");
})

newNavIcon.addEventListener("click", () => {
  newNavMenu.classList.toggle("newNavShow");
  newNavIcon.classList.toggle("open");
  newNavBar.classList.toggle("newBarTransition");
  newNavLogo.classList.toggle("newLogoHide");
})