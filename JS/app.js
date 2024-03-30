// Imports
import {
    // Functions
    handleMediaQueryChange,
    startSlideshow,
    goToTop,
    goToBottom,
    handleScrollButtons,
    hideMenuOnResize,
    updateCurrentSection,
    updateCurrentSectionOnScroll,
    toggleNavbarOnClick,
    toggleNavbarOnScroll,
    lockNavbar,
    toggleHamburgerMenu,
    closeHamburgerClickOutside,
    closeHamburgerPressEsc,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    moveCarouselCards,

    // Variables
    hamburger,
    mediaQuery,
    expandNavbarBtn,
    lockNavbarBtn,
    menuCarousels,
    menuCarouselBtns,
    clickAudio,
} from './utils.js';

handleMediaQueryChange(mediaQuery); // Fires the handleMediaQueryChange function from the start

// Scroll events
window.addEventListener('scroll', toggleNavbarOnScroll); // Toggles the navbar visibility when scrolling
window.addEventListener('scroll', updateCurrentSectionOnScroll); // Updates the current section when scrolling manually
window.addEventListener('scroll', handleScrollButtons) // Handles position and visibility of scroll buttons

// Click events
hamburger.addEventListener('click', toggleHamburgerMenu); // Toggles the hamburger state on click
document.body.addEventListener('click', closeHamburgerClickOutside); // Closes the menu when clicking outside
expandNavbarBtn.addEventListener('click', toggleNavbarOnClick); // 
lockNavbarBtn.addEventListener('click', lockNavbar); // Locks the navbar current state on click
document.querySelectorAll('.main-nav__list-item button').forEach(listItem => listItem.addEventListener('click', updateCurrentSection)); // Updates the current section when navigating through nav or buttons
document.querySelector('.controls__scroll-btn[data-action="top"]').addEventListener('click', goToTop); // Goes to the top of the page on click
document.querySelector('.controls__scroll-btn[data-action="bottom"]').addEventListener('click', goToBottom); // Goes to the bottom of the page on click

// Other events
window.addEventListener('resize', hideMenuOnResize); // Fires the hideMenuOnResize function
document.body.addEventListener('keydown', closeHamburgerPressEsc); // Closes the menu when pressing ESCAPE
mediaQuery.addEventListener('change', handleMediaQueryChange); // Listens for changes in screen size
window.addEventListener('load', startSlideshow); // Starts the slideshow when the page loads
menuCarousels.forEach(carousel => { // Adds event listeners for mouse events on each menu carousel
    carousel.addEventListener('mousedown', (event) => handleMouseDown(event, carousel));
    carousel.addEventListener('mousemove', event => handleMouseMove(event, carousel));
    carousel.addEventListener('mouseup', () => handleMouseUp(carousel));
    carousel.addEventListener('mouseleave', () => handleMouseUp(carousel));
})
menuCarouselBtns.forEach(btn => btn.addEventListener('click', () => moveCarouselCards(btn))); // Adds a click event to each button of each menu carousel to change carousel cards
document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => clickAudio.play()))
