
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('change');
});

