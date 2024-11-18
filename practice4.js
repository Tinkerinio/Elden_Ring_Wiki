const openPopupBtn = document.getElementById("openPopupBtn");
const popupForm = document.getElementById("popupForm");
const closePopupBtn = document.getElementById("closePopupBtn");
const overlay = document.getElementById("overlay");

// Check if user is logged in on page load
window.onload = function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        openPopupBtn.textContent = "Log Out";
    } else {
        openPopupBtn.textContent = "Sign up";
    }
};

// Toggle form visibility and login/logout functionality
openPopupBtn.addEventListener("click", function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        // Log out the user
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        openPopupBtn.textContent = "Sign up";
        alert("You have been logged out.");
    } else {
        // Show the signup form and overlay
        popupForm.style.display = "block";
        overlay.style.display = "block";
    }
});

// Close popup
closePopupBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
    overlay.style.display = "none";
});

// Form submission and validation
document.getElementById("userForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting until validation is done
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    let isValid = true;

    // Name validation
    if (name === "") {
        showError("nameError", "Name is required.");
        isValid = false;
    }

    // Email validation (simple regex for email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        showError("emailError", "Email is required.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        isValid = false;
    }

    // Password validation (minimum length of 6 characters)
    if (password === "") {
        showError("passwordError", "Password is required.");
        isValid = false;
    } else if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters long.");
        isValid = false;
    }

    // Confirm password validation (match with password)
    if (confirmPassword === "") {
        showError("confirmPasswordError", "Please confirm your password.");
        isValid = false;
    } else if (confirmPassword !== password) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    // If the form is valid, save user data in localStorage
    if (isValid) {
        // Save user data to localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        // Update button text and close the form
        openPopupBtn.textContent = "Log Out";
        popupForm.style.display = "none";
        overlay.style.display = "none";
        alert("Sign up successful! You are now logged in.");
    }
});

// Function to display error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Function to clear error messages
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function(element) {
        element.textContent = "";
    });
}