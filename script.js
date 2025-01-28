document.addEventListener("DOMContentLoaded", () => {
  const portfolioData = {
    about: "Hi! I'm Younes Khalloufi, a passionate software engineer with a Master's degree in Computer Science and Complex Systems Engineering, specializing in Artificial Intelligence and Robotics.",
    email: "YounesKhalloufi98@gmail.com",
    projects: [
      {
        name: "AI-Powered Chatbot",
        description: "A chatbot built using natural language processing to simulate intelligent conversations.",
        link: "https://github.com/YounesKhalloufi/AI-Chatbot",
      },
      {
        name: "Autonomous Robot Simulator",
        description: "A robot simulation that navigates a maze using SLAM algorithms and obstacle detection.",
        link: "https://github.com/YounesKhalloufi/Robot-Simulator",
      },
      {
        name: "AI-Based Recommendation System",
        description: "A recommendation system for movies and books using collaborative filtering and ML models.",
        link: "https://github.com/YounesKhalloufi/AI-Recommendation-System",
      },
    ],
  };

  // Show dynamic text typing
  let textIndex = 0;
  const textContainer = document.getElementById("aboutText");

  function typeCharacter() {
    if (textIndex < portfolioData.about.length) {
      textContainer.textContent += portfolioData.about[textIndex];
      textIndex++;
      setTimeout(typeCharacter, 50);
    }
  }
  typeCharacter();

  // Set up projects dynamically
  const projectList = document.getElementById("projectList");
  portfolioData.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectCard);
  });

  document.getElementById("email").href = `mailto:${portfolioData.email}`;
  document.getElementById("email").textContent = portfolioData.email;
});
