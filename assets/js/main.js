// lucide Icons
lucide.createIcons();

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
});

function closeMenu() {
    nav.classList.remove('is-open');
    document.body.classList.remove('is-open');
    humBtn.classList.remove('is-open');
    humBtn.setAttribute('aria-expanded', false);
}

document.getElementById("overlay").addEventListener('click', closeMenu);






