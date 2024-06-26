// ================= NAV BAR
const navToggler = document.querySelector(".nav_toggler");
const navMenu = document.querySelector(".mobile_nav");
const navLinks = document.querySelectorAll(".mobile_nav a");

function toggleNav() {
  navToggler.classList.toggle("toggler_open");
  navMenu.classList.toggle("open");
  document.documentElement.classList.toggle("overflow_hidden");
}

navToggler.addEventListener("click", toggleNav);

navLinks.forEach((elem) =>
  elem.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
  })
);

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

// COUNTDOWN JS CODE HERE
const countDownDate = new Date("Jun 6, 2025 15:37:25").getTime();
if (document.querySelector(".countdown")) {
  const countdown = document.querySelector(".countdown");
  const hourscontainer = countdown.querySelector(".js-hours span");
  const minutescontainer = countdown.querySelector(".js-minutes span");
  const secondscontainer = countdown.querySelector(".js-seconds span");

  const startCountdown = () => {
    const timer = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      if (distance < 0) {
        countdown.remove();
        clearInterval(timer);
      }

      // Time calculations for days, hours, minutes and seconds
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Add leading zeros
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Display the result in the element with id="demo"
      hourscontainer.innerHTML = hours;
      minutescontainer.innerHTML = minutes;
      secondscontainer.innerHTML = seconds;
    }, 1000);
  };

  startCountdown();
}
//  INTRODUCTION SECTION TABS START HERE
function myTabs(a) {
  let tabs = document.querySelectorAll(".tab");
  let myTabs = [
    document.getElementById("myTab1"),
    document.getElementById("myTab2"),
    document.getElementById("myTab3"),
    document.getElementById("myTab4"),
    document.getElementById("myTab5"),
    document.getElementById("myTab6"),
    document.getElementById("myTab7"),
    document.getElementById("myTab8"),
  ];

  tabs.forEach((tab) => {
    tab.classList.remove("show");
  });

  myTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  document.getElementById("tab" + a).classList.add("show");
  document.getElementById("myTab" + a).classList.add("active");
}

document.addEventListener("DOMContentLoaded", (event) => {
  myTabs(1);
});

// counter sections buttons js
const address_btn = document.getElementById("address_btn");
const eligibility_btn = document.getElementById("eligibility_btn");
function address() {
  address_btn.innerHTML =
    "bc1prvdtyd9zhnfqhnzpqq3jkjp5c7xu8lg77ld4senfj427ew8pux8s0vf0du";
  eligibility_btn.style.cursor = "pointer";
  address_btn.style.cursor = "default";
  eligibility_btn.style.background = "#d18d0e";
  eligibility_btn.style.color = "#000";
  document.getElementById("eligibility_btn").removeAttribute("disabled");
}
function eligibility() {
  address_btn.style.display = "none";
  const eligibility_box = document.getElementById("eligibility_box");
  eligibility_box.style.opacity = "1";
  eligibility_box.style.maxHeight = "464px";
  eligibility_box.classList.add("eligibility_box_spacing");

  eligibility_btn.innerHTML = "CONNECT WALLET TO CLAIM";
}

// CHART DATA JS START HERE
const chartBtn = document.getElementById("chart_btn");
const chartDataElements = document.querySelectorAll(".chart_data");

chartBtn.addEventListener("click", function () {
  chartDataElements.forEach((chartData) => {
    if (chartData.style.gridTemplateRows === "0fr" || chartData.style.gridTemplateRows === "") {
      chartData.style.gridTemplateRows = "1fr";
      chartBtn.innerHTML = "Collapse charts ▲";
    } else {
      chartData.style.gridTemplateRows = "0fr";
      chartBtn.innerHTML = "Expand charts for more details ▼";
    }
  });
});

