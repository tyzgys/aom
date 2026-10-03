document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.10 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const animatedItems = document.querySelectorAll('.scroll-animate');
    animatedItems.forEach(item => {
        observer.observe(item);
    });









    const slider = document.getElementById('hallSlider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (slider && prevBtn && nextBtn) {
        // Шаг прокрутки равен ширине карточки + отступу между ними
        const scrollAmount = window.innerWidth * 0.258; 

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }











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










    const section = document.getElementById('rulesSection');
    const bgTop = document.getElementById('bgTop');
    const bgBottom = document.getElementById('bgBottom');

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
    
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
        const maxOffset = 25; 
        const translateYTop = mouseY * maxOffset * 1.5;        
        const translateYBottom = -mouseY * maxOffset * 1.5; 
    
        const translateX = mouseX * maxOffset * 0.5;

        bgTop.style.transform = `translateX(calc(-50% + ${translateX}px)) translateY(${translateYTop}px)`;
        bgBottom.style.transform = `translateX(calc(-50% + ${translateX}px)) translateY(${translateYBottom}px)`;
    });

    section.addEventListener('mouseleave', () => {
        bgTop.style.transform = `translateX(-50%) translateY(0px)`;
        bgBottom.style.transform = `translateX(-50%) translateY(0px)`;
    });


    window.addEventListener('scroll', () => {
    
        const header = document.querySelector('header');
    
        // Если прокрутили больше 50px, добавляем класс 'scrolled'
    
        if (window.scrollY > 50) {
    
            header.classList.add('scrolled');
    
        } else {
    
            header.classList.remove('scrolled');
    
        }
    });



    

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