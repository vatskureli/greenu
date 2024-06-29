document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navigation .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
$('.slider-wraper').slick({
     
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            setActiveLink(this);
        });
    });

    // Function to set the active link
    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Optional: update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
 
document.getElementById('burgerbar').addEventListener('click', function() {
    const nav = document.querySelector('.navigation, .mobile-navmenu');
    const burgerBar = document.getElementById('burgerbar');

    if (nav.classList.contains('navigation')) {
        nav.classList.replace('navigation', 'mobile-navmenu');
        burgerBar.classList.add('burgerbar-toggled');
    } else {
        nav.classList.replace('mobile-navmenu', 'navigation');
        burgerBar.classList.remove('burgerbar-toggled');
    }
});