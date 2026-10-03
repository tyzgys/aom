document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".scroll-anim");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.15 
    });

    animatedElements.forEach(el => observer.observe(el));







    window.addEventListener('scroll', () => {
    
        const header = document.querySelector('header');
    
        // Если прокрутили больше 50px, добавляем класс 'scrolled'
    
        if (window.scrollY > 50) {
    
            header.classList.add('scrolled');
    
        } else {
    
            header.classList.remove('scrolled');
    
        }
    });






    const form = document.getElementById('feedbackForm');
    const notification = document.getElementById('formNotification');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 

            notification.classList.remove('hidden');

            form.reset();

            setTimeout(() => {
                notification.classList.add('hidden');
            }, 4000);
        });
    }





        const burgerBtn = document.querySelector('.mobile-burger-btn');
    const menuCard = document.querySelector('.mobile-menu-card');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const dropdownBtn = document.querySelector('.mobile-dropdown-btn');
    const dropdownContent = document.querySelector('.mobile-dropdown-content');
    const dropdownArrow = document.querySelector('.dropdown-arrow');

    if (!burgerBtn || !menuCard) return;

    function toggleMenu() {
        const isOpen = menuCard.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        menuCard.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuCard.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdownContent.classList.contains('open');
            
            if (isOpen) {
                dropdownContent.classList.remove('open');
                dropdownBtn.classList.remove('active');
                if (dropdownArrow) dropdownArrow.textContent = '<';
            } else {
                dropdownContent.classList.add('open');
                dropdownBtn.classList.add('active');
                if (dropdownArrow) dropdownArrow.textContent = 'v';
            }
        });
    }

    burgerBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);




});