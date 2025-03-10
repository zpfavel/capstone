document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing page
    alert("Thank you! Your message has been sent.");
    this.reset(); // Clears form fields
});