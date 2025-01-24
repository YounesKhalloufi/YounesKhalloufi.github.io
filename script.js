// JavaScript Code

// Dynamic greeting based on the time of day
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    header.textContent = `${greeting} Welcome to My Portfolio`;
});

// Smooth scrolling for links (if you add a navigation menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Back-to-top button functionality
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑ Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px";
backToTopButton.style.backgroundColor = "#4CAF50";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
document.body.appendChild(backToTopButton);

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
