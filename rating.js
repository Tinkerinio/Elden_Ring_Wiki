// Select all stars
const stars = document.querySelectorAll('.star');
const ratingMessage = document.getElementById('ratingMessage');

// Add event listeners to each star
stars.forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-value');
        
        // Highlight the stars up to the selected rating
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= ratingValue) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
        
        // Update the message below the stars
        ratingMessage.textContent = `Thank you for your rating as ${ratingValue} star${ratingValue > 1 ? 's' : ''}.`;
    });
});
