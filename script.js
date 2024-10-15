// script.js

// Example: Add an active class to the current page's navigation link
const currentLocation = window.location.pathname; 
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.href.includes(currentLocation)) {
    link.classList.add('active');
  }
});