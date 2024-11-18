// Get the button and the time display container elements
const showTimeButton = document.querySelector('.show-time-btn');
const timeDisplay = document.getElementById('time-display');

// Add an event listener to the button to listen for clicks
showTimeButton.addEventListener('click', function() {
    // Get the current time using Date().toLocaleTimeString()
    const currentTime = new Date().toLocaleTimeString();

    // Display the current time in the designated area
    timeDisplay.textContent = `Current Time: ${currentTime}`;
});
