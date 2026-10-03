document.addEventListener("DOMContentLoaded", function () {
    // Универсальная функция инициализации карусели
    function initCarousel(config) {
        const wrap = document.querySelector(config.wrapSelector);
        if (!wrap) return;

        const prevBtn = wrap.querySelector(config.prevBtnSelector);
        const nextBtn = wrap.querySelector(config.nextBtnSelector);
        const slides = wrap.querySelectorAll(config.slideSelector);
        const dotsContainer = document.querySelector(config.dotsContainerSelector);

        let currentIndex = 0;
        const totalSlides = slides.length;
        if (totalSlides === 0) return;

        // Генерация точек
        if (dotsContainer && dotsContainer.children.length === 0) {
            slides.forEach((_, idx) => {
                const dot = document.createElement("div");
                dot.classList.add("carousel-dot");
                if (idx === 0) dot.classList.add("active");
                dot.addEventListener("click", () => goToSlide(idx));
                dotsContainer.appendChild(dot);
            });
        }

        const dots = dotsContainer ? dotsContainer.querySelectorAll(".carousel-dot") : [];

        function updateCarousel() {
            slides.forEach((slide, idx) => {
                slide.className = config.baseSlideClass;

                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                const nextIndex = (currentIndex + 1) % totalSlides;
                const farPrevIndex = (currentIndex - 2 + totalSlides) % totalSlides;
                const farNextIndex = (currentIndex + 2) % totalSlides;

                if (idx === currentIndex) {
                    slide.classList.add("active");
                } else if (idx === prevIndex) {
                    slide.classList.add("prev");
                } else if (idx === nextIndex) {
                    slide.classList.add("next");
                } else if (idx === farPrevIndex) {
                    slide.classList.add("far-prev");
                } else if (idx === farNextIndex) {
                    slide.classList.add("far-next");
                }
            });

            dots.forEach((dot, idx) => {
                dot.classList.toggle("active", idx === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });
        }

        updateCarousel();
    }

    // Инициализация карусели «Глубоководные рыбы»
    initCarousel({
        wrapSelector: ".halls-carousel-wrap",
        prevBtnSelector: ".fish-prev",
        nextBtnSelector: ".fish-next",
        slideSelector: ".halls-slide",
        dotsContainerSelector: ".halls-dots",
        baseSlideClass: "halls-slide"
    });

    // Инициализация карусели «Медузы»
    initCarousel({
        wrapSelector: ".jellyfish-carousel-wrap",
        prevBtnSelector: ".jellyfish-prev",
        nextBtnSelector: ".jellyfish-next",
        slideSelector: ".jellyfish-slide",
        dotsContainerSelector: ".jellyfish-dots",
        baseSlideClass: "jellyfish-slide"
    });

    // Инициализация карусели «Кальмары и осьминоги»
    initCarousel({
        wrapSelector: ".squid-carousel-wrap",
        prevBtnSelector: ".squid-prev",
        nextBtnSelector: ".squid-next",
        slideSelector: ".squid-slide",
        dotsContainerSelector: ".squid-dots",
        baseSlideClass: "squid-slide"
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







    gsap.registerPlugin(ScrollTrigger);

// Левый узор плавно смещается вниз при скролле
gsap.to(".pattern-left", {
    yPercent: 30, // На сколько процентов сместить
    ease: "none",
    scrollTrigger: {
        trigger: ".sections-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1 // Плавная привязка к скроллу (число = секунды задержки/плавности)
    }
});

// Правый узор двигается с немного другой скоростью или вверх
gsap.to(".pattern-right", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".sections-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
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