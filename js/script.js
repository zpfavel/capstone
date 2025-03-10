document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("loading-video");
  var authContainer = document.getElementById("auth-container");

  // Ensure login/signup window is completely hidden on page load
  authContainer.style.display = "none";
  authContainer.style.opacity = "0";
  authContainer.style.visibility = "hidden";

  // Listen for when the video ends
  video.addEventListener("ended", function () {
      authContainer.style.display = "flex"; // Make visible
      authContainer.style.visibility = "visible";
      authContainer.classList.add("fade-in"); // Apply animation
  });
});

// Redirect to main.html when the Login button is clicked
function redirectToMain() {
  window.location.href = "main.html";
}

// Redirect to signup.html when the Sign Up button is clicked
function redirectToSignup() {
  window.location.href = "signup.html";
}