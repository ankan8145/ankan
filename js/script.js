/* js/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate__animated');
    animatedElements.forEach(elem => {
      // You can add more dynamic interactions here if needed.
      elem.classList.add('animate__fadeIn');
    });
  });

  
  function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
  }


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function(e) {
    navMenu.classList.toggle("active");
    e.stopPropagation();
  });

  document.addEventListener("click", function(e) {
    if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && e.target !== menuToggle) {
      navMenu.classList.remove("active");
    }
  });
});

