// Data for projects
const projects = [
  {
    name: "AI-Based Robotics",
    description: "Designed a robotic arm that learns from its environment using reinforcement learning algorithms.",
    imageUrl: "robotics-project.jpg",
    link: "https://github.com/YounesKhalloufi/robotics"
  },
  {
    name: "AI-Powered Chatbot",
    description: "Developed an intelligent chatbot using NLP techniques for customer service automation.",
    imageUrl: "chatbot-project.jpg",
    link: "https://github.com/YounesKhalloufi/chatbot"
  },
  // Add more projects here
];

// Add projects to the DOM dynamically
const projectList = document.getElementById("projectList");
projects.forEach(project => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("col");
  projectCard.innerHTML = `
    <div class="card project-card">
      <img src="${project.imageUrl}" class="card-img-top" alt="${project.name}">
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <p class="card-text">${project.description}</p>
        <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
      </div>
    </div>
  `;
  projectList.appendChild(projectCard);
});

// Scroll-to-top button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

scrollTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
