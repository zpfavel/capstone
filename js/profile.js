// Footer

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;
});

// Navbar
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('menu-open');
    });
});

// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Helper function to handle image upload
    function handleImageUpload(inputElement, imgElementId, storageKey) {
        if (!inputElement || !imgElementId) return;

        inputElement.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imgElement = document.getElementById(imgElementId);
                    if (imgElement) {
                        imgElement.src = e.target.result;
                        localStorage.setItem(storageKey, e.target.result);
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        // Load image from localStorage if available
        const storedImage = localStorage.getItem(storageKey);
        if (storedImage) {
            const imgElement = document.getElementById(imgElementId);
            if (imgElement) imgElement.src = storedImage;
        }
    }

    // Banner Upload
    const bannerEditBtn = document.getElementById("bannerEditBtn");
    const bannerUpload = document.getElementById("bannerUpload");

    if (bannerEditBtn && bannerUpload) {
        bannerEditBtn.addEventListener("click", () => bannerUpload.click());
        handleImageUpload(bannerUpload, "bannerImage", "bannerImage");
    }

    // Profile Image Upload
    const profileEditBtn = document.getElementById("profileEditBtn");
    const profileUpload = document.getElementById("profileUpload");

    if (profileEditBtn && profileUpload) {
        profileEditBtn.addEventListener("click", () => profileUpload.click());
        handleImageUpload(profileUpload, "profileImage", "profileImage");
    }

    // Real-time editing and saving
    const editableFields = document.querySelectorAll("[contenteditable='true']");
    editableFields.forEach(field => {
        field.addEventListener("blur", saveProfileData);
    });

    // Load saved data
    loadProfileData();

    // Ensure default name is displayed
    if (!localStorage.getItem("name")) {
        document.getElementById('name').textContent = "Navraj Ghimire";
    }

    // Keep banner edit button visible on hover
    const bannerContainer = document.querySelector(".banner-container");
    if (bannerContainer && bannerEditBtn) {
        bannerContainer.addEventListener("mouseenter", () => {
            bannerEditBtn.style.opacity = 1;
        });
        bannerContainer.addEventListener("mouseleave", () => {
            bannerEditBtn.style.opacity = 0;
        });

        bannerEditBtn.addEventListener("mouseenter", () => {
            bannerEditBtn.style.opacity = 1;
        });
        bannerEditBtn.addEventListener("mouseleave", () => {
            bannerEditBtn.style.opacity = 0;
        });
    }
});

// Save profile data
function saveProfileData() {
    const fields = ["name", "pronoun", "courseName", "currentYear", "currentSemester"];
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            localStorage.setItem(field, element.innerText);
        }
    });
}

// Load profile data from local storage
function loadProfileData() {
    const fields = ["bannerImage", "profileImage", "name", "pronoun", "courseName", "currentYear", "currentSemester"];
    fields.forEach(field => {
        const storedValue = localStorage.getItem(field);
        if (storedValue) {
            const element = document.getElementById(field);
            if (element) {
                if (field.includes("Image")) {
                    element.src = storedValue;
                } else {
                    element.innerText = storedValue;
                }
            }
        }
    });
}



