function updateDateTime() {
    // Get the current date and time
    const now = new Date();

    // Array of month names for formatting the date
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Format the date
    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    // Format the time with AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Create the formatted date and time string
    const formattedDateTime = `${month} ${day}, ${year}, ${hours}:${minutes} ${ampm}`;

    // Display the date and time on the webpage
    document.getElementById('dateTimeDisplay').innerHTML = formattedDateTime;
}

// Call the function to update the date and time
updateDateTime();

// Set an interval to update the time every second
setInterval(updateDateTime, 1000);
