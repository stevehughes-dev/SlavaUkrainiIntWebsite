// window.addEventListener('DOMContentLoaded', (e) => {
//     const stage = document.getElementById('stage');
//     const fadeComplete = (e) => { stage.appendChild(pics[0]); };
//     const pics = stage.getElementsByTagName('img');
//     for (let i = 0; i < pics.length; i++) {
//         pics[i].addEventListener('animationend', fadeComplete, false);
//     }
// }, false);

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}