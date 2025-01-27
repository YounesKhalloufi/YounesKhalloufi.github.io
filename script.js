// JavaScript File for Portfolio

const portfolioData = {
    about: "Hi! I'm Younes Khalloufi, a passionate software engineer with a Master's degree in Computer Science and Complex Systems Engineering, specializing in Artificial Intelligence and Robotics.",
    email: "YounesKhalloufi98@gmail.com",
    projects: [
        { name: "AI-Powered Chatbot", description: "A chatbot built using natural language processing to simulate intelligent conversations.", link: "https://github.com/YounesKhalloufi/AI-Chatbot" },
        { name: "Autonomous Robot Simulator", description: "A robot simulation that navigates a maze using SLAM algorithms and obstacle detection.", link: "https://github.com/YounesKhalloufi/Robot-Simulator" },
        { name: "AI-Based Recommendation System", description: "A recommendation system for movies and books using collaborative filtering and ML models.", link: "https://github.com/YounesKhalloufi/AI-Recommendation-System" },
        { name: "Traffic Flow Prediction System", description: "A machine learning model that predicts traffic flow based on historical and weather data.", link: "https://github.com/YounesKhalloufi/Traffic-Prediction" },
        { name: "AI for Game Playing", description: "An intelligent agent that plays the classic game Snake using reinforcement learning.", link: "https://github.com/YounesKhalloufi/Game-AI" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const aboutTextElement = document.getElementById("aboutText");
    const emailElement = document.getElementById("email");
    const projectList = document.getElementById("projectList");

    // Typewriter effect for "About Me" text
    function typewriterEffect(text, element, speed = 50) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typewriter effect
    typewriterEffect(portfolioData.about, aboutTextElement, 50);

    // Set email link
    emailElement.href = `mailto:${portfolioData.email}`;
    emailElement.textContent = portfolioData.email;

    // Render projects dynamically
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectCard);
    });
});
