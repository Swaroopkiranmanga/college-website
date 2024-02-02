const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close the drop-down menu when clicking outside the menu
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});
