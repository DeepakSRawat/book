// window.onscroll = function () {
//     changeHeaderOnScroll();
// };

// const header = document.getElementById("header");
// const sticky = header.offsetTop;

// function changeHeaderOnScroll() {
//     // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     //     header.classList.add("sticky-top");
//     // } else {
//     //     header.classList.remove("sticky-top");
//     // }
// }

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
}