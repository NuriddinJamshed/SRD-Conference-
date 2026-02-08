document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menuBtn');
    const menu = document.querySelector('menu');
    
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    const toggleMenu = () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');

        menuBtn.style.transform = menu.classList.contains('active') 
            ? 'rotate(0deg)' 
            : 'rotate(0deg)';
    };

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('menu a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});