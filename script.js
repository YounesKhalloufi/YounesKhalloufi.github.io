// Data for projects
const projects = [
  {
    name: "Project 1",
    description: "A web development project using HTML, CSS, and JavaScript.",
    imageUrl: "project1.jpg",
    link: "https://example.com"
  },
  {
    name: "Project 2",
    description: "A mobile app built with React Native.",
    imageUrl: "project2.jpg",
    link: "https://example.com"
  },
  // Add more projects as needed
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

// Scroll to top functionality
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
