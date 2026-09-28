document.addEventListener("DOMContentLoaded", () => {
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
});