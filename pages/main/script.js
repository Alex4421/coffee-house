const sliderFrames = document.getElementById('slider-frames');
const slides = document.querySelectorAll('.slider-frames > div');
const totalSlides = slides.length;
const buttonMenu = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu7');
const body = document.getElementById('body');
const lineOne = document.getElementById('burger-line-1');
const lineTwo = document.getElementById('burger-line-2');
let isToggled = false;
const first7 = document.querySelectorAll('nav a');
let sliderFrameNumber = 0;
let innerActiveWeight = 0;
const leftButton = document.getElementById('button-left');
const rightButton = document.getElementById('button-right');
const sliderTransform = sliderFrames.style.transform = `translateX(${sliderFrameNumber}%)`;
const sliderControlInner = document.querySelectorAll('.slider-control-inner');
const sliderInnerActive = document.querySelector('.slider-inner-active');
leftButton.addEventListener('click', event => sliderToLeft());
rightButton.addEventListener('click', event => sliderToRight());

                // burger-menu
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

    function links(){
    burgerMenu.style.left = '100%';
    body.style.overflow ='auto';
    lineOne.style.transform = 'rotate(0deg)';
    lineTwo.style.transform = 'rotate(0deg)';
    lineOne.style.top = '36%'
    lineTwo.style.top = '59%';
 }

 first7.forEach(link => {
    link.addEventListener('click', links);
});


//  slider

function fillControlInner(num) {
    let inner = sliderControlInner[num];
    let innerWeight = 1;
    inner.classList.add('slider-inner-active');
    inner.style.width = `${innerWeight}%`;
    let innerInterval = setInterval(() => {
        if (sliderFrames.getAttribute('mouseinframe') === 'out') {
            if (inner.classList.contains('slider-inner-active')) {
                inner.style.width = `${innerWeight += 1}%`;
            } else {
                clearInterval(innerInterval);
            }
            if (innerWeight === 102) {//120
                clearInterval(innerInterval);
                sliderToRight();
            }
        }
    }, 50);
}

function sliderToLeft () {
    sliderControlInner.forEach(element => {
        element.classList.remove('slider-inner-active');
        element.style.width = '0%';
    });
    if (sliderFrameNumber === 0) {
        sliderFrameNumber = -66.66;
        fillControlInner(2);
    } else if (sliderFrameNumber === -33.33) {
        sliderFrameNumber = 0;
        fillControlInner(0);
    } else if (sliderFrameNumber === -66.66) {
        sliderFrameNumber = -33.33;
        fillControlInner(1);
    }
    sliderFrames.style.transform = `translateX(${sliderFrameNumber}%)`;
}

function sliderToRight () {
    sliderControlInner.forEach(element => {
        element.classList.remove('slider-inner-active');
        element.style.width = '0%';
    });
    if (sliderFrameNumber === 0) {
        sliderFrameNumber = -33.33;
        fillControlInner(1);
    } else if (sliderFrameNumber === -33.33) {
        sliderFrameNumber = -66.66;
        fillControlInner(2);
    } else if (sliderFrameNumber === -66.66) {
        sliderFrameNumber = 0;
        fillControlInner(0);
    }
    sliderFrames.style.transform = `translateX(${sliderFrameNumber}%)`;
}

sliderToLeft();
sliderToRight();

function setAttributeSliderFrame () {
    sliderFrames.setAttribute('mouseinframe', 'out');
    sliderFrames.addEventListener("mouseenter", (e) => {
        sliderFrames.setAttribute('mouseinframe', 'in');
    });
    sliderFrames.addEventListener("mouseleave", (e) => {
        sliderFrames.setAttribute('mouseinframe', 'out');
    });
}
setAttributeSliderFrame();

function touchScreen () {
    let touchStartX = null;
    const touchScreen = document.querySelector('.slider-screen');
    touchScreen.addEventListener('touchstart', function(event) {
        sliderFrames.setAttribute('mouseinframe', 'in');
        touchStartX = event.changedTouches[0].screenX;
    } , false);
    touchScreen.addEventListener('touchend', function(event) {
        let touchEndX = event.changedTouches[0].screenX;
        if (touchStartX > touchEndX) {
            sliderToRight();
        } else if (touchStartX < touchEndX) {
            sliderToLeft();
        }
        sliderFrames.setAttribute('mouseinframe', 'out');
    }, false);
}
touchScreen();

function mouseScreen () {
    let mouseStartX = null;
    const mouseScreen = document.querySelector('.slider-screen');
    mouseScreen.addEventListener('mousedown', function(event) {
        sliderFrames.setAttribute('mouseinframe', 'in');
        mouseStartX = event.screenX;
    } , false);
    mouseScreen.addEventListener('mouseup', function(event) {
        let mouseEndX = event.screenX;
        if (mouseStartX > mouseEndX) {
            sliderToRight();
        } else if (mouseStartX < mouseEndX) {
            sliderToLeft();
        }
        sliderFrames.setAttribute('mouseinframe', 'out');
    }, false);
}
mouseScreen();