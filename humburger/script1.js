// Select elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
