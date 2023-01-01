import "./style.css";

const hamBurgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-nav");
const navBar = document.querySelector("#navbar");
const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");
const tab1Img = document.querySelector("#tab-1-img");
const tab2Img = document.querySelector("#tab-2-img");
const tab3Img = document.querySelector("#tab-3-img");
const tab1Text = document.querySelector("#tab-1-text");
const tab2Text = document.querySelector("#tab-2-text");
const tab3Text = document.querySelector("#tab-3-text");
const tab1Underline = document.querySelector("#tab-1-underline");
const tab2Underline = document.querySelector("#tab-2-underline");
const tab3Underline = document.querySelector("#tab-3-underline");

console.log(tab2);

window.addEventListener("load", () => {
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

  tab1.addEventListener("click", () => {
    tab1.style.color = "hsl(229,31%,21%)";
    tab2.style.color = "hsl(229,8%,60%)";
    tab3.style.color = "hsl(229,8%,60%)";
    tab1Underline.classList.remove("hidden");
    tab2Underline.classList.add("hidden");
    tab3Underline.classList.add("hidden");
    tab1Img.classList.remove("hidden");
    tab2Img.classList.add("hidden");
    tab3Img.classList.add("hidden");
    tab1Text.classList.remove("hidden");
    tab2Text.classList.add("hidden");
    tab3Text.classList.add("hidden");
    tab2.style.color = null;
    tab3.style.color = null;
  });

  tab2.addEventListener("click", () => {
    tab1.style.color = "hsl(229,8%,60%)";
    tab2.style.color = "hsl(229,31%,21%)";
    tab3.style.color = "hsl(229,8%,60%)";
    tab1Underline.classList.add("hidden");
    tab2Underline.classList.remove("hidden");
    tab3Underline.classList.add("hidden");
    tab1Img.classList.add("hidden");
    tab2Img.classList.remove("hidden");
    tab3Img.classList.add("hidden");
    tab1Text.classList.add("hidden");
    tab2Text.classList.remove("hidden");
    tab3Text.classList.add("hidden");
    tab1.style.color = null;
    tab3.style.color = null;
  });

  tab3.addEventListener("click", () => {
    tab1.style.color = "hsl(229,8%,60%)";
    tab2.style.color = "hsl(229,8%,60%)";
    tab3.style.color = "hsl(229,31%,21%)";
    tab1Underline.classList.add("hidden");
    tab2Underline.classList.add("hidden");
    tab3Underline.classList.remove("hidden");
    tab1Img.classList.add("hidden");
    tab2Img.classList.add("hidden");
    tab3Img.classList.remove("hidden");
    tab1Text.classList.add("hidden");
    tab2Text.classList.add("hidden");
    tab3Text.classList.remove("hidden");
    tab1.style.color = null;
    tab2.style.color = null;
  });
});
