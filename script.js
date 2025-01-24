document.addEventListener('DOMContentLoaded', function() {
    const profileDiv = document.getElementById('profile');
    const githubUsername = 'YounesKhalloufi';  // Replace with your GitHub username

    fetch(`https://api.github.com/users/${githubUsername}`)
        .then(response => response.json())
        .then(data => {
            profileDiv.innerHTML = `
                <div>
                    <img src="${data.avatar_url}" alt="Profile Picture">
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                    <p><a href="${data.html_url}" target="_blank">Visit GitHub Profile</a></p>
                </div>
            `;
        })
        .catch(error => {
            profileDiv.innerHTML = '<h2>Error loading profile</h2>';
            console.error('Error fetching GitHub profile:', error);
        });
});
