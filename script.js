

// Navbar Interaction
const nav = document.getElementById("navbar");
window.onscroll = () => {
  if (window.scrollY > 50) nav.classList.add("bg-black", "shadow-2xl");
  else nav.classList.remove("bg-black", "shadow-2xl");
};

// Mobile Menu Logic
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => mobileMenu.classList.add("active"));
closeBtn.addEventListener("click", () => mobileMenu.classList.remove("active"));

// Close menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("active"));
});

// Reseting form content is js
const form = document.getElementById("form");
form.addEventListener("reset", () => {
  setTimeout(() => {
    form.reset();
  }, 800);
});
