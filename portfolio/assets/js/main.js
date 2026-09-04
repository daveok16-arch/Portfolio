// Portfolio interactions: mobile nav, current year, console-safe.
"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { siteNav.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); });
    });
  }
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
