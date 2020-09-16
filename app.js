// Selectors
const navLinks = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.burger');

// Events
burgerMenu.addEventListener('click', burgerClicked);

// Functions
function burgerClicked(e) {
   navLinks.classList.toggle('show-nav-links');
   // Animate the burger line into an X
   burgerMenu.classList.toggle('toggle');
}
