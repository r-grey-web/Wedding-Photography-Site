// lucide Icons
lucide.createIcons();

// Hamburger menu
const nav = document.getElementById("p-gnav");
const humBtn = document.getElementById("ham-btn");

humBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    humBtn.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !humBtn.contains(e.target)) {
        nav.classList.remove('is-open');
        humBtn.setAttribute('aria-expanded', false);
    }
});