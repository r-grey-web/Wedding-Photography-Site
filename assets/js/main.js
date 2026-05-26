// lucide Icons
lucide.createIcons();

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    document.querySelector('.p-gnav').classList.toggle('scrolled', window.scrollY > 40);
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Hamburger menu
const nav = document.getElementById("p-gnav");
const humBtn = document.getElementById("ham-btn");


humBtn.addEventListener('click', () => {
    const isMobile = window.matchMedia("(max-width: 992px)").matches

    if (isMobile) {
        const isOpen = nav.classList.contains("is-open");
        if (!isOpen) {
            const navItems = document.querySelectorAll(".p-gnav .p-gnav__item");
            const targetItems = Array.from(navItems).slice(0, 6);
            targetItems.forEach((item, i) => {
                item.style.transitionDelay = `${(i + 1) * 0.05}s`;
            });
        }
    }

    const opened = nav.classList.toggle('is-open');
    document.body.classList.toggle('is-open', opened);
    humBtn.classList.toggle('is-open');
    humBtn.setAttribute('aria-expanded', opened);

    if (opened) {
        backToTopBtn.classList.remove('is-visible');
    } else {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('is-visible');
        }
    }
});

function closeMenu() {
    nav.classList.remove('is-open');
    document.body.classList.remove('is-open');
    humBtn.classList.remove('is-open');
    humBtn.setAttribute('aria-expanded', false);

    if (window.scrollY > 300) {
        backToTopBtn.classList.add('is-visible');
    }
}

document.getElementById("overlay").addEventListener('click', closeMenu);

// Portfolio Section
window.addEventListener('load', () => {
    const images = document.querySelector('.portfolio__images');
    const lastChildImages = document.querySelector('.portfolio__images .portfolio__img:last-child');
    const textBox = document.querySelector('.portfolio__text-box');

    function matchWidth() {
        if (window.innerWidth < 773) {
            textBox.style.width = lastChildImages.offsetWidth + 'px';
        } else if (window.innerWidth < 1389) {
            textBox.style.width = images.offsetWidth + 'px';
        } else {
            textBox.style.width = '';
        }
    }

    matchWidth();
    window.addEventListener('resize', matchWidth);
});

// Testimonials Section - Swiper
const swiper = new Swiper('.testimonials__swiper', {
    loop: true,
    navigation: {
        prevEl: '.testimonials__arrow--prev',
        nextEl: '.testimonials__arrow--next',
    },
});





