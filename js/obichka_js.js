document.addEventListener("DOMContentLoaded", function () {
      const sliderSection = document.querySelector(".gallery-slider-section");  
      if (!sliderSection) return;

      const prevBtn = sliderSection.querySelector(".gallery-arrow.prev-btn");
      const nextBtn = sliderSection.querySelector(".gallery-arrow.next-btn");
      const cards = sliderSection.querySelectorAll(".gallery-card");  
      const dotsContainer = sliderSection.querySelector(".gallery-dots");
  
      let currentIndex = 0;
      const totalSlides = cards.length;







      // Автоматическое добавление палочек-индикаторов
      if (dotsContainer && dotsContainer.children.length === 0) {
        cards.forEach((_, idx) => {
            const dot = document.createElement("div");
            dot.classList.add("gallery-dot");
            if (idx === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });
    }













    
    const dots = sliderSection.querySelectorAll(".gallery-dot");

    function updateCarousel() {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        const nextIndex = (currentIndex + 1) % totalSlides;
        const currentCard = cards[currentIndex];
        const prevCard = cards[prevIndex];
        const nextCard = cards[nextIndex];
        const cWidth = currentCard.getBoundingClientRect().width;
        const pWidth = prevCard.getBoundingClientRect().width;
        const nWidth = nextCard.getBoundingClientRect().width;













        // Смещение боковых слайдов рассчитывается относительно габаритов каждого изображения
        const shiftPrev = -((cWidth / 2) + (pWidth / 2) * 0.78 + 25);
        const shiftNext = ((cWidth / 2) + (nWidth / 2) * 0.78 + 25);

        cards.forEach((card, idx) => {
            card.className = "gallery-card";

            if (idx === currentIndex) {
                card.classList.add("active");
                card.style.setProperty('--shift-prev', '0px');
                card.style.setProperty('--shift-next', '0px');
            } else if (idx === prevIndex) {
                card.classList.add("prev");
                card.style.setProperty('--shift-prev', `${shiftPrev}px`);
            } else if (idx === nextIndex) {
                card.classList.add("next");
                card.style.setProperty('--shift-next', `${shiftNext}px`);
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

    window.addEventListener('resize', updateCarousel);
    updateCarousel();












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