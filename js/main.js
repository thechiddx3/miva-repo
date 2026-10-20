// Mobile Navigation Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const primaryNav = document.getElementById('primaryNav');

    if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', () => {
            const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpened));
            menuToggle.classList.toggle('active');
            primaryNav.classList.toggle('open');
            document.body.classList.toggle('nav-open');
        });

        // Close menu when clicking any navigation link
        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                primaryNav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!primaryNav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                primaryNav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });
    }
});
