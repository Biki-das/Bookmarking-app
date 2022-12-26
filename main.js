import "./style.css";

const hamBurgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-nav");
const navBar = document.querySelector("#navbar");

hamBurgerIcon.addEventListener("click", OpenMobileNav);
closeIcon.addEventListener("click", closeMobileNav);

function OpenMobileNav() {
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("flex");
  navBar.classList.add("invisible");
}

function closeMobileNav() {
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("flex");
  navBar.classList.remove("invisible");
}
