const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
    title.addEventListener('click', function () {
        const content = this.nextElementSibling;

        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

const lightModeToggle = document.getElementById('lightModeToggle');

lightModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('light-mode')) {
        lightModeToggle.textContent = 'Dark Mode';
    } else {
        lightModeToggle.textContent = 'Light Mode';
    }
});
