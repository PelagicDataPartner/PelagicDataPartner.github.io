// main.js

// =============================
// 1. Smooth scrolling
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// =============================
// 2. Simple contact form validation
// =============================
const form = document.querySelector("#contact-form");

if (form) {
    form.addEventListener("submit", function (e) {

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        }
    });
}


// =============================
// 3. Mobile menu toggle
// =============================
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// =============================
// 4. Dark mode toggle (optional)
// =============================
const darkModeBtn = document.querySelector("#dark-mode-toggle");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark-mode")
        );
    });

    // Load preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
}