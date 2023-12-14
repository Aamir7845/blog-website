// js/main.js
console.log("chal rha hai ")
document.addEventListener('DOMContentLoaded', function () {
        // Image Slider Functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slider-item');
        const totalSlides = slides.length;
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }
    
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
    
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
    
        // Dark Mode Toggle Functionality
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
    
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
    
        // Initial setup
        showSlide(currentSlide);
    });
    