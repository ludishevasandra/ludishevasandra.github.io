/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/hero-slider/view.js ***!
  \*********************************/
if (document.querySelector(".wp-block-create-block-hero-slider")) {
  // slider variables
  const slides = document.querySelectorAll(".wp-block-create-block-hero-slider .hero-slider__view-area li");
  const length = document.querySelectorAll(".wp-block-create-block-hero-slider .hero-slider__view-area li").length;
  let index = 0;
  let focus = false;

  // functions
  function setSlide(newCurrent, direction, setFocus) {
    newCurrent = +newCurrent;
    focus = setFocus;
    if (newCurrent !== index) {
      // reset slide classes
      slides.forEach(li => {
        li.className = "wp-block-create-block-hero-slider-single";
      });
      if (direction == "left") {
        slides[index].classList.add("left");
        slides[newCurrent].classList.add("from-right");
      } else {
        slides[index].classList.add("right");
        slides[newCurrent].classList.add("from-left");
      }
      slides[index].setAttribute('aria-hidden', 'true');
      slides[newCurrent].classList.add("current");
      slides[newCurrent].setAttribute('aria-hidden', 'false');

      // update buttons
      document.querySelectorAll(".wp-block-create-block-hero-slider .hero-slider__nav ol li button").forEach((item, index) => {
        if (index == newCurrent) {
          item.className = "current";
          item.innerHTML = '<span class="screen-reader-text">Слайд (Текущий) </span>' + (index < 9 ? "0" : "") + (index + 1);
        } else {
          item.className = "";
          item.innerHTML = '<span class="screen-reader-text">Слайд </span>' + (index < 9 ? "0" : "") + (index + 1);
        }
      });
      index = newCurrent;
    }
  }
  function prevSlide() {
    let newCurrent = index - 1;
    if (newCurrent < 0) newCurrent = length - 1;
    setSlide(newCurrent, "right", false);
    setLiveRegion(newCurrent);
  }
  function nextSlide() {
    let newCurrent = index + 1;
    if (newCurrent == length) newCurrent = 0;
    setSlide(newCurrent, "left", false);
    setLiveRegion(newCurrent);
  }
  function setLiveRegion(newCurrent) {
    document.querySelector(".wp-block-create-block-hero-slider .hero-slider__liveregion").textContent = "Слайд " + (newCurrent + 1) + " из " + length;
  }
  function setFocusHere(event) {
    const slide = event.target;
    if (focus) {
      if (event.target.classList.contains("wp-block-create-block-hero-slider-single")) {
        const currentSlide = document.querySelector(".wp-block-create-block-hero-slider-single.current");
        currentSlide.setAttribute("tabindex", "-1");
        currentSlide.focus();
        focus = false;
      }
    }
  }
  function setMaxHeight() {
    const articleHeights = [...document.querySelectorAll(".wp-block-create-block-hero-slider .hero-slider__view-area li article")].map(article => article.offsetHeight);
    const maxArticleHeights = Math.max(...articleHeights);
    document.querySelector(".wp-block-create-block-hero-slider .hero-slider__view-area").style.height = maxArticleHeights + 'px';
  }
  function addKeyboardAccessibility(event) {
    if (event.key == "ArrowRight") {
      nextSlide();
    }
    if (event.key == "ArrowLeft") {
      prevSlide();
    }
  }
  !function () {
    slides.forEach((li, index) => {
      if (index == 0) {
        li.classList.add("current");
        li.setAttribute("aria-hidden", "false");
      } else {
        li.setAttribute("aria-hidden", "true");
      }
    });
    setMaxHeight();
  }();

  // addEventListeners
  document.querySelectorAll(".wp-block-create-block-hero-slider .hero-slider__nav ol li button").forEach(button => {
    button.addEventListener("click", () => {
      const newCurrent = button.getAttribute("data-slide");
      if (index < newCurrent) {
        setSlide(newCurrent, "left", true);
      } else {
        setSlide(newCurrent, "right", true);
      }
    });
  });
  document.querySelector(".wp-block-create-block-hero-slider .hero-slider__controls li .hero-slider__btn-prev").addEventListener("click", prevSlide);
  document.querySelector(".wp-block-create-block-hero-slider .hero-slider__controls li .hero-slider__btn-next").addEventListener("click", nextSlide);
  document.querySelector(".wp-block-create-block-hero-slider .hero-slider__view-area").addEventListener("transitionend", setFocusHere);
  document.querySelector(".wp-block-create-block-hero-slider").addEventListener("keydown", addKeyboardAccessibility);
  window.addEventListener("resize", setMaxHeight);
}
/******/ })()
;
//# sourceMappingURL=view.js.map