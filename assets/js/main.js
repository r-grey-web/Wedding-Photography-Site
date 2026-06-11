// lucide icon
document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    const nav = document.getElementById("p-gnav");
    const humBtn = document.getElementById("ham-btn");
    const backToTopBtn = document.querySelector('.back-to-top');
    const footer = document.getElementById('footer');


    // Scroll event
    window.addEventListener('scroll', () => {
        const isPC = window.matchMedia("(min-width: 992px)").matches;
        if (isPC) {
            document.querySelector('.p-gnav').classList.toggle('scrolled', window.scrollY > 40);
        }

        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('is-visible');
            } else {
                backToTopBtn.classList.remove('is-visible');
            }
        }
    });

    // Hide when the footer is visible
    if (backToTopBtn && footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                backToTopBtn.style.opacity = entry.isIntersecting ? '0' : '';
                backToTopBtn.style.pointerEvents = entry.isIntersecting ? 'none' : '';

                // Hide the nav menu on desktop only
                const isPC = window.matchMedia("(min-width: 992px)").matches;
                if (isPC) {
                    nav.style.opacity = entry.isIntersecting ? '0' : '';
                    nav.style.pointerEvents = entry.isIntersecting ? 'none' : '';
                }
            });
        });

        observer.observe(footer);

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Hamburger menu
    humBtn.addEventListener('click', () => {
        const isMobile = window.matchMedia("(max-width: 991px)").matches

        if (isMobile) {
            const isOpen = nav.classList.contains("is-open");

            const navItems = document.querySelectorAll(".p-gnav .p-gnav__item");
            const targetItems = Array.from(navItems).slice(0, 6);

            if (!isOpen) {

                targetItems.forEach((item, i) => {
                    item.style.transitionDelay = `${(i + 1) * 0.05}s`;
                });
            } else {
                setTimeout(() => {
                    targetItems.forEach((item) => {
                        item.style.transitionDelay = '';
                    });
                }, 400);
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

    document.querySelectorAll('.p-gnav .p-gnav__item a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.matchMedia("(max-width: 991px)").matches) {
                closeMenu()
            }
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            closeMenu();
            humBtn.focus();
        }
    });


    // Portfolio section - Match the text box width to the image width
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

    // Testimonials section - Initialize Swiper
    if (document.querySelector('.testimonials__swiper') && typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.testimonials__swiper', {
            loop: true,
            navigation: {
                prevEl: '.testimonials__arrow--prev',
                nextEl: '.testimonials__arrow--next',
            },
        });
    }
});




