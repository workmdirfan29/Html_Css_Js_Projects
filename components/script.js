const hamburgerIcon = document.getElementById("hamburger-icon");
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");

function openSidebar() {
  sidebar.classList.add("open");
}

function closeSidebar() {
  sidebar.classList.remove("open");
}

hamburgerIcon.addEventListener("click", openSidebar);
closeIcon.addEventListener("click", closeSidebar);

// Lenis
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
