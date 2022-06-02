// Menu
document.getElementById("navbar__toggler").onclick = function () {
  document.getElementById("navbar__menu").classList.toggle("active");
  document.querySelector(".navbar__toggler i").classList.toggle("fa-toggle-on");
};

// Footer date
document.getElementById("date").innerText = new Date().getFullYear();

// Scroll up icon
let goToTopIcon = document.getElementById("go-to-top-icon");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goToTopIcon.style.transform = "translateY(0px)";
  } else {
    goToTopIcon.style.transform = "translateY(100px)";
  }
}
