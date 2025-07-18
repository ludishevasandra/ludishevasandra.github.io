/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/clients-slider/view.js ***!
  \************************************/
if (document.querySelector(".wp-block-create-block-clients-slider")) {
  // slider variables
  const slides = document.querySelectorAll(".wp-block-create-block-clients-slider .clients-slider__view-area li");
  const length = document.querySelectorAll(".wp-block-create-block-clients-slider .clients-slider__view-area li").length;
  let index = 0;

  // functions
  function setSlide(newCurrent, direction) {
    newCurrent = +newCurrent;
    let newNext = newCurrent + 1;
    let newPrev = newCurrent - 1;
    if (newNext === length) newNext = 0;
    if (newPrev < 0) newPrev = length - 1;

    // reset slide classes
    slides.forEach(li => {
      li.className = "wp-block-create-block-clients-slider-single";
    });
    slides[newNext].classList.add("next");
    if (direction == "next") slides[newNext].classList.add("in-transition");
    slides[newNext].setAttribute("aria-hidden", "true");
    slides[newPrev].classList.add("prev");
    if (direction == "prev") slides[newPrev].classList.add("in-transition");
    slides[newPrev].setAttribute("aria-hidden", "true");
    slides[newCurrent].classList.add("current");
    slides[newCurrent].setAttribute("aria-hidden", "false");
    document.querySelector(".wp-block-create-block-clients-slider .clients-slider__liveregion").textContent = "Комментарий " + (newCurrent + 1) + " из " + length;
    index = newCurrent;
  }
  function prevSlide() {
    let newCurrent = index - 1;
    if (newCurrent < 0) newCurrent = length - 1;
    setSlide(newCurrent, "next");
  }
  function nextSlide() {
    let newCurrent = index + 1;
    if (newCurrent == length) newCurrent = 0;
    setSlide(newCurrent, "prev");
  }
  function setMaxHeight() {
    const articleHeights = [...document.querySelectorAll(".wp-block-create-block-clients-slider .clients-slider__view-area li article")].map(article => article.offsetHeight);
    const maxArticleHeights = Math.max(...articleHeights);
    document.querySelector(".wp-block-create-block-clients-slider .clients-slider__view-area").style.height = maxArticleHeights + 'px';
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
      } else if (index == 1) {
        li.classList.add("next");
      } else if (index == length - 1) {
        li.classList.add("prev");
      } else {
        li.setAttribute("aria-hidden", "true");
      }
    });
    // lazy loading set height
    const clientsCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setMaxHeight();
        }
      });
    };
    const clientsObserver = new IntersectionObserver(clientsCallback);
    clientsObserver.observe(document.querySelector('.wp-block-create-block-clients-slider'));
  }();

  // addEventListeners
  document.querySelector(".wp-block-create-block-clients-slider .clients-slider__controls li .clients-slider__btn-prev").addEventListener("click", prevSlide);
  document.querySelector(".wp-block-create-block-clients-slider .clients-slider__controls li .clients-slider__btn-next").addEventListener("click", nextSlide);
  document.querySelector(".wp-block-create-block-clients-slider .clients-slider__view-area").addEventListener("transitionend", event => event.target.classList.remove("in-transition"));
  document.querySelector(".wp-block-create-block-clients-slider").addEventListener("keydown", addKeyboardAccessibility);
  window.addEventListener("resize", setMaxHeight);
}
/******/ })()
;
//# sourceMappingURL=view.js.map