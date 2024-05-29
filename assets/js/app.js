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
