function showGreeting() {
    let currentHour = new Date().getHours();  // Get the current hour (0-23)
    let greeting = '';

    // Switch statement to decide the greeting based on the time of day
    switch (true) {
        case (currentHour >= 5 && currentHour < 12):
            greeting = 'Good Morning!';
            break;
        case (currentHour >= 12 && currentHour < 17):
            greeting = 'Good Afternoon!';
            break;
        case (currentHour >= 17 && currentHour < 21):
            greeting = 'Good Evening!';
            break;
        default:
            greeting = 'Good Night!';
    }

    // Display the greeting in the HTML element
    document.getElementById('greeting').textContent = greeting;
}