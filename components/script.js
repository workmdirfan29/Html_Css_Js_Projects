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
window.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    lerp: 0.1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

// Accordion code here | Toggle accordion open/close

function toggleAccordion(header) {
  const accordionItem = header.parentElement;

  // Close other accordion items (optional, for single-open functionality)
  const allItems = document.querySelectorAll(".accordion-item");
  allItems.forEach((item) => {
    if (item !== accordionItem) {
      item.classList.remove("active");
    }
  });

  // Toggle current accordion
  accordionItem.classList.toggle("active");
}
