// JavaScript File for Portfolio

// Dynamic data
const portfolioData = {
    about: "Hi! I'm Younes Khalloufi, a passionate software engineer specializing in creating efficient and innovative solutions. I love building web applications, solving problems, and contributing to open-source projects.",
    email: "YounesKhalloufi98@gmail.com",
    projects: [
        {
            name: "Project 1",
            description: "A cool project that does amazing things.",
            link: "https://github.com/YounesKhalloufi/project1"
        },
        {
            name: "Project 2",
            description: "An innovative solution to a challenging problem.",
            link: "https://github.com/YounesKhalloufi/project2"
        },
        {
            name: "Project 3",
            description: "An awesome project built with love and passion.",
            link: "https://github.com/YounesKhalloufi/project3"
        }
    ]
};

// Load data into the page
document.addEventListener("DOMContentLoaded", () => {
    // Load About Me Section
    document.getElementById("aboutText").textContent = portfolioData.about;

    // Load Email
    const emailElement = document.getElementById("email");
    emailElement.href = `mailto:${portfolioData.email}`;
    emailElement.textContent = portfolioData.email;

    // Load Projects
    const projectList = document.getElementById("projectList");
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
