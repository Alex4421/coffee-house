const rightButton = document.getElementById('button-right');
const leftButton = document.getElementById('button-left');
const sliderFrames = document.getElementById('slider-frames');
const slides = document.querySelectorAll('.slider-frames > div');
const totalSlides = slides.length;
const buttonMenu = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu7');
const body = document.getElementById('body');
const lineOne = document.getElementById('burger-line-1');
const lineTwo = document.getElementById('burger-line-2');
let isToggled = false;


let currentIndex = 0;
 function updateSlider() {
    sliderFrames.style.transform = `translateX(-${currentIndex * 33.3}%)`; 
    updateControls();
}

rightButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Возвращаемся к первому слайду
    }
    updateSlider();
});

leftButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;}
    updateSlider();
});

 buttonMenu.addEventListener('click', function(){
    
        isToggled = !isToggled;
        if (isToggled) {
            burgerMenu.style.left = '0%';
            burgerMenu.style.transition = '0.5s';
            body.style.overflow ='hidden';
            lineOne.style.transform = 'rotate(-45deg)';
            lineOne.style.top = '49%'
            lineTwo.style.transform = 'rotate(45deg)';
            lineTwo.style.top = '51%';
        } else {
            burgerMenu.style.left = '100%';
            body.style.overflow ='auto';
            lineOne.style.transform = 'rotate(0deg)';
            lineTwo.style.transform = 'rotate(0deg)';
            lineOne.style.top = '36%'
            lineTwo.style.top = '59%';
        }
 })