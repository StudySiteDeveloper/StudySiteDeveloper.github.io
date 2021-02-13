const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const bg = document.querySelector('.background');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        bg.classList.toggle('bg-shift');
    });
}
navSlide();

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky && window.innerWidth > 768) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
