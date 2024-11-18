// Get the popup elements
const popup = document.getElementById("popupForm");
const overlay = document.getElementById("overlay");
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const body = document.querySelector("body");

// Open the popup when the button is clicked
openPopupBtn.addEventListener("click", function() {
    popup.style.display = "block";
    overlay.style.display = "block";
    body.classList.add("freeze-background");  // Freeze background
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("freeze-background");  // Unfreeze background
});

// Close the popup when clicking outside the popup content (on the overlay)
overlay.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("freeze-background");  // Unfreeze background
});
