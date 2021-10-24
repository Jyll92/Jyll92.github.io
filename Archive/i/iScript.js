const newNavIcon = document.querySelector(".newNavIcon");
const newNavBar = document.querySelector(".newBar");
const newNavMenu = document.querySelector(".newMenu");
const newNavLogo = document.querySelector(".indLogo");



newNavIcon.addEventListener("click", () => {
  newNavMenu.classList.toggle("newNavShow");
  newNavIcon.classList.toggle("open");
  newNavBar.classList.toggle("newBarTransition");
  newNavLogo.classList.toggle("newLogoHide");
})

// const scrollContainer = document.querySelector(".projectC");

