// Portfolio Data Object
const portfolioData = {
  about: "Hi! I'm Younes Khalloufi, a passionate software engineer with a Master's degree in Computer Science and Complex Systems Engineering, specializing in Artificial Intelligence and Robotics.",
  email: "YounesKhalloufi98@gmail.com",
  phone: "+393505981964",
  projects: [
    {
      name: "AI-Powered Chatbot",
      description: "A chatbot built using natural language processing to simulate intelligent conversations.",
      link: "https://github.com/YounesKhalloufi/AI-Chatbot"
    },
    {
      name: "Autonomous Robot Simulator",
      description: "A robot simulation that navigates a maze using SLAM algorithms and obstacle detection.",
      link: "https://github.com/YounesKhalloufi/Robot-Simulator"
    },
    {
      name: "AI-Based Recommendation System",
      description: "A recommendation system for movies and books using collaborative filtering and ML models.",
      link: "https://github.com/YounesKhalloufi/AI-Recommendation-System"
    },
    {
      name: "Traffic Flow Prediction System",
      description: "A machine learning model that predicts traffic flow based on historical and weather data.",
      link: "https://github.com/YounesKhalloufi/Traffic-Prediction"
    },
    {
      name: "AI for Game Playing",
      description: "An intelligent agent that plays the classic game Snake using reinforcement learning.",
      link: "https://github.com/YounesKhalloufi/Game-AI"
    }
  ]
};

// Initialize Portfolio Content
function loadPortfolio() {
  // About Me Text (Typewriter effect is handled by CSS)
  document.getElementById("aboutText").textContent = portfolioData.about;

  // Set Email & Phone
  const emailEl = document.getElementById("email");
  emailEl.href = `mailto:${portfolioData.email}`;
  emailEl.textContent = portfolioData.email;

  const phoneEl = document.getElementById("phone");
  phoneEl.href = `tel:${portfolioData.phone}`;
  phoneEl.textContent = portfolioData.phone;

  // Load Projects dynamically
  const projectList = document.getElementById("projectList");
  portfolioData.projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100 project-card">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text flex-grow-1">${project.description}</p>
          <a href="${project.link}" target="_blank" class="btn btn-primary mt-3">View Project</a>
        </div>
      </div>
    `;
    projectList.appendChild(col);
  });

  // Reveal project cards on scroll using Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".project-card").forEach(card => {
    observer.observe(card);
  });
}

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggleButton = document.getElementById("theme-toggle");
  const bodyElement = document.body;

  // Check localStorage for theme preference
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    bodyElement.classList.add("dark");
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    const isDark = bodyElement.classList.contains("dark");
    themeToggleButton.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Scroll-to-top Button Functionality
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio();
  initThemeToggle();
  initScrollToTop();
});
