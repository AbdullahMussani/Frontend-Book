function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

window.onload = function () {
    let currentIndex = 0;
    
    function scrollLeft() {
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth + 20; // Adjust if there's any margin/padding
        if (currentIndex > 0) {
            currentIndex--;
            document.querySelector('.main-content').style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    function scrollRight() {
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth + 20;
        if (currentIndex < cards.length - 3) { // Ensuring only 3 cards are shown at once
            currentIndex++;
            document.querySelector('.main-content').style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    // Add event listeners for buttons after the page has loaded
    document.querySelector('.scroll-btn.left').addEventListener('click', scrollLeft);
    document.querySelector('.scroll-btn.right').addEventListener('click', scrollRight);


    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }
}