document.addEventListener("DOMContentLoaded", () => {
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










   const sliderContainer = document.querySelector(".halls-carousel-wrap");
    if (!sliderContainer) return;

    const prevBtn = sliderContainer.querySelector(".halls-prev");
    const nextBtn = sliderContainer.querySelector(".halls-next");

    if (prevBtn) {
        prevBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
    }
    if (nextBtn) {
        nextBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    }

    const slides = document.querySelectorAll(".halls-slide");
    const dotsContainer = document.querySelector(".halls-dots");
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Генерация точек
    if (dotsContainer && dotsContainer.children.length === 0) {
        slides.forEach((_, idx) => {
            const dot = document.createElement("div");
            dot.classList.add("halls-dot");
            if (idx === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll(".halls-dot");

    function updateCarousel() {
        slides.forEach((slide, idx) => {
            slide.className = "halls-slide";

            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            const nextIndex = (currentIndex + 1) % totalSlides;

            if (idx === currentIndex) {
                slide.classList.add("active");
            } else if (idx === prevIndex) {
                slide.classList.add("prev");
            } else if (idx === nextIndex) {
                slide.classList.add("next");
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















});