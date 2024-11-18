document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collect form data
    const formData = new FormData(this);

    // Convert form data to a JSON object
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Make an asynchronous POST request
    fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Call the success callback function
        showSuccessMessage();
    })
    .catch(error => {
        // Call the error callback function
        showErrorMessage();
    });
});

// Callback to handle success
function showSuccessMessage() {
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
}

// Callback to handle error
function showErrorMessage() {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
}
