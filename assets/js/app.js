// ================= NAV BAR 
const navToggler = document.querySelector('.nav_toggler');
const navMenu = document.querySelector('.mobile_nav');
const navLinks = document.querySelectorAll('.mobile_nav a');

function toggleNav() {
  navToggler.classList.toggle('toggler_open');
  navMenu.classList.toggle('open');
  document.documentElement.classList.toggle("overflow_hidden");
}

navToggler.addEventListener('click', toggleNav);

navLinks.forEach(elem => elem.addEventListener('click', () => {
  if (navMenu.classList.contains('open')) {
    toggleNav();
  }
}));


// ============ BACK TO TOP ============

document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("back_to_top_btn");
  window.addEventListener("scroll", function () {
    // Show button when user scrolls down 20px from the top
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  // Scroll to the top when the button is clicked
  backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
