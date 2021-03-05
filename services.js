const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function () {
    alert('Thank you for downloading! Be free to sent me feedback on my e-mail.');
})
/*window.onscroll = function () { scrollFunction() };
scrollFunction => (){
    console.log("hello");
}
scrollFunction();*/


var timeSpent = 0;
var timer;
window.onload = function () {
    timer = setInterval(function () { timeSpent++; }, 998);
};
console.log(timeSpent);

window.onunload = function () {
    timer = clearInterval(timer);
}


var anim = document.querySelector(".anim");

window.onscroll = function () { animFunct() };

async function animFunct() {
    var msg = await "You scrolled down";
    console.log(msg);
    anim.innerHTML = "You scrolled down";
    anim.style.color = "black";
    anim.style.display = "none";

}
animFunct();
var navbarList = document.querySelector('nav');
var faBars = document.querySelector('.fa-bars')

faBars.addEventListener('click', function () {
    console.log('You just clicked navbar!');
    navbarList.style.color = "red";


})
/*var body = document.querySelector('body');
var darkMode = document.querySelector('#dark-mode');
darkMode.addEventListener('click', function () {
    console.log('You just clicked dark mode!');
    body.style.backgroundImage = "linear-gradient( 109.6deg, black, black)";
});*/


var timesClicked = 0;
var body = document.querySelector('body');
var footer = document.querySelector('footer')
var darkMode = document.querySelector('#dark-mode');
var shapes = document.querySelectorAll('.box-area li');
darkMode.addEventListener('click', function () {
    timesClicked++;

    if (timesClicked % 2 == 0) {
        function whiteMode() {
            body.style.backgroundImage = "linear-gradient( 109.6deg, #780206, #061161)";
        }
        whiteMode();
    }
    else {
        function darkMode() {
            body.style.backgroundImage = "linear-gradient( 109.6deg, black, black )";
            shapes.style.backgroundColor = "red";

        }
        darkMode();
    }

});