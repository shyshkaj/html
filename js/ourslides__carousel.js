(function() {
    const slides = [
        '<div><img class="spaces__slider" src="img/blackoffice.png" alt="spaces workers"></div>', 
        '<div><img class="spaces__slider" src="img/brownoffice.png" alt="spaces barrels"></div>',    
        '<div><img class="spaces__slider" src="img/dedicateddesk.png" alt="spaces plant"></div>',    
        '<div><img class="spaces__slider" src="img/shareddesk.png" alt="spaces product"></div>',    
        '<div><img class="spaces__slider" src="img/whiteoffice.png" alt="spaces work"></div>',    
        '<div><img class="spaces__slider" src="img/singleoffice.png" alt="spaces bottels"></div>'
    ];
  
    const prevButton = document.querySelector('.spaces__slider_btn_prev');
    const nextButton = document.querySelector('.spaces__slider_btn_next');
    const navItems = document.querySelectorAll('.spaces__nav_item');
  
    let currentSlide = 0;
  
    function renderSlides(slides) {
      const slidesContainer = document.querySelector('.spaces__slider_wrapper');
      slidesContainer.innerHTML = slides[currentSlide];
      handleSliderClick();
    }
  
    function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderSlides(slides);
      setActiveNavItem();
    }
  
    function prevSlide() {
      currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
      renderSlides(slides);
      setActiveNavItem();
    }
  
    function setActiveNavItem() {
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      navItems[currentSlide].classList.add('active');
    }
  
    function handleNavItemClick(e) {
      const navItemIndex = Array.from(navItems).indexOf(e.currentTarget);
      if (navItemIndex !== -1 && navItemIndex !== currentSlide) {
        currentSlide = navItemIndex;
        renderSlides(slides);
        setActiveNavItem();
      }
    }
  
    renderSlides(slides);
    setActiveNavItem();
  
    function handleSliderClick() {
      const modal = document.querySelector('.spaces__slider_modal');
      const modalImg = document.querySelector('.spaces__modal_form .spaces__slider');
      const sliders = document.querySelectorAll('.spaces__slider');
    
      sliders.forEach((slider, i) => {
        slider.removeEventListener('click', openModal);
        slider.addEventListener('click', openModal);
      });
    
      const closeBtn = document.querySelector('.items__close');
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      function openModal() {
        modal.style.display = 'block';
        modalImg.src = this.src;
      }
    }
  
    function modalItem() {
      const slidesModal = [
        '<div><img class="spaces__slider" src="img/blackoffice.png" alt="spaces workers"></div>', 
        '<div><img class="spaces__slider" src="img/brownoffice.png" alt="spaces barrels"></div>',    
        '<div><img class="spaces__slider" src="img/dedicateddesk.png" alt="spaces plant"></div>',    
        '<div><img class="spaces__slider" src="img/shareddesk.png" alt="spaces product"></div>',    
        '<div><img class="spaces__slider" src="img/whiteoffice.png" alt="spaces work"></div>',    
        '<div><img class="spaces__slider" src="img/singleoffice.png" alt="spaces bottels"></div>'
      ];
  
      let currentSlideModal = 0;
  
      function renderSlidesModal(slidesModal) {
        const slidesContainerModal = document.querySelector('.spaces__wrapper_modal');
        slidesContainerModal.innerHTML = slides[currentSlideModal];
      }
  
      function nextSlideModal() {
        currentSlideModal = currentSlideModal + 1 >= slidesModal.length ? 0 : currentSlideModal + 1;
        renderSlidesModal(slidesModal);
      }
  
      function prevSlideModal() {
        currentSlideModal = currentSlideModal - 1 < 0 ? slidesModal.length - 1 : currentSlideModal - 1;
        renderSlidesModal(slidesModal);
      }
  
      renderSlidesModal(slidesModal);
  
      const nextBtnModal = document.querySelector('.spaces__btn_next');
      nextBtnModal.addEventListener('click', nextSlideModal);
  
      const prevBtnModal = document.querySelector('.spaces__btn_prev');
      prevBtnModal.addEventListener('click', prevSlideModal);
  
      window.addEventListener('resize', () => {
        renderSlidesModal(slidesModal);
      })
    }
  
    modalItem();
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    navItems.forEach(item => item.addEventListener('click', handleNavItemClick));
  
    window.addEventListener('resize', () => {
      renderSlides(slides);
    });
  })();
  