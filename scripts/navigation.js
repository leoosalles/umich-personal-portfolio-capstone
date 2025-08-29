const closeBtn = document.querySelector('.close-nav');
const openBtn = document.querySelector('.open-nav');
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');

closeBtn.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    nav.setAttribute('aria-expanded', 'false');
});

openBtn.addEventListener('click', () => {
    nav.classList.add('navigation-open');
    nav.setAttribute('aria-expanded', 'true');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('navigation-open');
        nav.setAttribute('aria-expanded', 'false');
    });
});