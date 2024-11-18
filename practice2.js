// Function to generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add an event listener to the button to change the background color
document.getElementById('changeColorButton').addEventListener('click', function() {
    // Set a new random background color when the button is clicked
    document.body.style.backgroundColor = getRandomColor();
});
