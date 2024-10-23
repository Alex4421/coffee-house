const rightButton = document.getElementById('button-right');
const leftButton = document.getElementById('button-left');
const sliderFrames = document.getElementById('slider-frames');
const slides = document.querySelectorAll('.slider-frames > div');
const totalSlides = slides.length;


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