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

// Function to initialize portfolio content
function loadPortfolio() {
  // Load About Me Section
  document.getElementById("aboutText").textContent = portfolioData.about;

  // Load Email
  const emailElement = document.getElementById("email");
  emailElement.href = `mailto:${portfolioData.email}`;
  emailElement.textContent = portfolioData.email;

  // Load Phone
  const phoneElement = document.getElementById("phone");
  phoneElement.href = `tel:${portfolioData.phone}`;
  phoneElement.textContent = portfolioData.phone;

  // Load Projects dynamically
  const projectList = document.getElementById("projectList");
  portfolioData.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
    `;
    projectList.appendChild(projectCard);
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

// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio();
  initThemeToggle();
});
