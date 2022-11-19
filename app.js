"use strict";

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
const main = document.querySelector(".main")
const pre = document.querySelector("#preloader");
// window.addEventListener("load", () => {
//   pre.style.display = "none";
//   main.style.display = "block"
// });
function hide() {
  pre.style.display = "none";
}
function show() {
  main.style.opacity = '1';
}
window.addEventListener("load", () => {
  setTimeout(hide, 2000);
  setTimeout(show, 1950);
});
