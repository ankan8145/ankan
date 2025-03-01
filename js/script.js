/* js/script.js */
// This file can be used to add custom JavaScript effects or interactions.
// Example: A simple script that ensures elements with the 'animate__animated'
// class get an additional effect on page load.
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate__animated');
    animatedElements.forEach(elem => {
      // You can add more dynamic interactions here if needed.
      elem.classList.add('animate__fadeIn');
    });
  });
  