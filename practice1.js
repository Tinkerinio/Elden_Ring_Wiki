// Select all headers in the accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Toggle the "active" class to highlight the current item
        this.classList.toggle('active');

        // Select the associated content section
        const content = this.nextElementSibling;

        // Check if content is already visible
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
