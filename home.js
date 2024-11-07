function toggleNav() {
    const nav = document.getElementById("navbarNav");
    nav.classList.toggle("show");
}

let currentSlide = 0;
const slideInterval = 5000; // Time in milliseconds for each slide

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Go to first slide
    }

    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, slideInterval);
