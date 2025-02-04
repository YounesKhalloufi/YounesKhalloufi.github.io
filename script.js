// Portfolio Data Object with Phone Number Added
const portfolioData = {
  about: "Hi! I'm Younes Khalloufi, a passionate software engineer with a Master's in Computer Science and Complex Systems Engineering, specializing in Artificial Intelligence and Robotics.",
  email: "YounesKhalloufi98@gmail.com",
  phone: "+393505981964",
  projects: [
    {
      name: "AI-Powered Chatbot",
      description: "A chatbot using natural language processing for intelligent conversations.",
      link: "https://github.com/YounesKhalloufi/AI-Chatbot"
    },
    {
      name: "Autonomous Robot Simulator",
      description: "A simulation navigating mazes using SLAM and obstacle detection.",
      link: "https://github.com/YounesKhalloufi/Robot-Simulator"
    },
    {
      name: "AI-Based Recommendation System",
      description: "A system recommending movies and books using collaborative filtering and ML models.",
      link: "https://github.com/YounesKhalloufi/AI-Recommendation-System"
    },
    {
      name: "Traffic Flow Prediction System",
      description: "A model predicting traffic flow based on historical and weather data.",
      link: "https://github.com/YounesKhalloufi/Traffic-Prediction"
    },
    {
      name: "AI for Game Playing",
      description: "An intelligent agent that plays Snake using reinforcement learning.",
      link: "https://github.com/YounesKhalloufi/Game-AI"
    }
  ]
};

// Load portfolio content into the page
function loadPortfolio() {
  // Typewriter effect for About Me text
  const aboutTextEl = document.getElementById("aboutText");
  const aboutMessage = portfolioData.about;
  let index = 0;
  function typeWriter() {
    if (index < aboutMessage.length) {
      aboutTextEl.textContent += aboutMessage.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // Set Email
  const emailEl = document.getElementById("email");
  emailEl.href = `mailto:${portfolioData.email}`;
  emailEl.textContent = portfolioData.email;

  // Set Phone
  const phoneEl = document.getElementById("phone");
  phoneEl.href = `tel:${portfolioData.phone}`;
  phoneEl.textContent = portfolioData.phone;

  // Dynamically load Projects with a reveal animation
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
  // Use IntersectionObserver for reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
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

// Wait for DOM content to load before initializing
document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio();
  initThemeToggle();
});
