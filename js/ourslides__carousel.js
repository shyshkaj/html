(function () {

    const slides  = [
        '<div><img src="img/blackoffice.png" alt="black office"></div>',
        '<div><img src="img/brownoffice.png" alt="broenoffice"></div>',
        '<div><img src="img/privateoffice.png" alt="privateoffice"></div>',
        '<div><img src="img/singleoffice.png" alt="singleoffice"></div>',
    ];

    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.ourspaces-carousel__slides');
        slidesContainer.innerHTML = slides[currentSlide];
        }
    

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }

    renderSlides(slides);

    const nextButton = document.querySelector('.carousel__button--left');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.carousel__button--right');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    });
})();