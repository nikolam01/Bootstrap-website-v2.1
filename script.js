var p = document.querySelector('.text');
function popupf() {
  console.log('This alert message is written in JS!')
}
alertfunction = () => {
  p.addEventListener('click', popupf);
}
alertfunction();
var h = document.querySelector('h1');
hello = () => {
  console.log(h, p);
}
var img = document.querySelector("#image1");
img.addEventListener('click', function () {
  console.log("You just clicked on image!");
});
window.onscroll = function () { myFunction() };
var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky");
  }
}

