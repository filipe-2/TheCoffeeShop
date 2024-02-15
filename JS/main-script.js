// Function to move the first slide to the end
function moveFirstSlideToEnd() {
    const slides = document.querySelector('.slides');
    const firstSlide = slides.firstElementChild;

    slides.appendChild(firstSlide);
}

// Function to switch slides
function switchSlide() {
    const activeSlide = document.querySelector('.slide.active');
    const nextSlide = activeSlide.nextElementSibling || document.querySelector('.slide:first-child'); // If there's no next slide, loop back to the first
    const activeSlideIndicator = document.querySelector('.slide-indicator.checked');
    const nextSlideIndicator = activeSlideIndicator.nextElementSibling || document.querySelector('.slide-indicator:first-child'); // If there's no next indicator, loop back to the first

    activeSlide.classList.remove('active');
    activeSlideIndicator.classList.remove('checked');
    nextSlide.classList.add('active');
    nextSlideIndicator.classList.add('checked');
}

// Function to start the slideshow
function startSlideshow() {
    setInterval(() => {
        moveFirstSlideToEnd();
        switchSlide();
    }, 5000); // Switch slides every 5 seconds
}

// Start the slideshow when the page loads
window.addEventListener('load', startSlideshow);

// Handling scrolling controls and their visibility
window.addEventListener('scroll', function () {
    let scroll = document.querySelectorAll('.scrollBtn');
    let isOnBottom = (window.innerHeight + window.scrollY + 50) >= document.documentElement.offsetHeight;
    let scrollTop = scroll[0];
    let scrollBottom = scroll[1];

    scrollTop.classList.toggle('active', window.scrollY > 0);
    scrollBottom.classList.toggle('active', !isOnBottom);

    // Positioning the scrolling buttons based on the position inside the page 
    if (this.window.scrollY <= 0 || isOnBottom) {
        scrollTop.style.marginBottom = '-50px';
    } else {
        scrollTop.style.marginBottom = '0'
    }
})

// Function to go back to the top of the page
function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// Function to go back to the bottom of the page
function goToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    })
}