/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/project-slider/view.js ***!
  \************************************/
if (document.querySelector(".wp-block-create-block-project-slider")) {
  // slider variables
  const slides = document.querySelectorAll(".wp-block-create-block-project-slider .project-slider__view-area li");
  const length = document.querySelectorAll(".wp-block-create-block-project-slider .project-slider__view-area li").length;
  let index = 0;
  let focus = false;

  // functions
  function setSlide(newCurrent, direction, setFocus) {
    newCurrent = +newCurrent;
    focus = setFocus;
    if (newCurrent !== index) {
      // reset slide classes
      slides.forEach(li => {
        li.className = "wp-block-create-block-project-slider-single";
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
      document.querySelectorAll(".wp-block-create-block-project-slider .project-slider__nav ul li button").forEach((item, index) => {
        if (index == newCurrent) {
          item.className = "current";
          item.firstElementChild.innerHTML = 'Изображение (Текущее)';
        } else {
          item.className = "";
          item.firstElementChild.innerHTML = 'Изображение';
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
    document.querySelector(".wp-block-create-block-project-slider .project-slider__liveregion").textContent = "Изображение " + (newCurrent + 1) + " из " + length;
  }
  function setFocusHere(event) {
    const slide = event.target;
    if (focus) {
      if (event.target.classList.contains("wp-block-create-block-project-slider-single")) {
        const currentSlide = document.querySelector(".wp-block-create-block-project-slider-single.current");
        currentSlide.setAttribute("tabindex", "-1");
        currentSlide.focus();
        focus = false;
      }
    }
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
  }();

  // addEventListeners
  document.querySelectorAll(".wp-block-create-block-project-slider .project-slider__nav ul li button").forEach(button => {
    button.addEventListener("click", () => {
      const newCurrent = button.getAttribute("data-slide");
      if (index < newCurrent) {
        setSlide(newCurrent, "left", true);
      } else {
        setSlide(newCurrent, "right", true);
      }
    });
  });
  document.querySelector(".wp-block-create-block-project-slider .project-slider__controls li .project-slider__btn-prev").addEventListener("click", prevSlide);
  document.querySelector(".wp-block-create-block-project-slider .project-slider__controls li .project-slider__btn-next").addEventListener("click", nextSlide);
  document.querySelector(".wp-block-create-block-project-slider .project-slider__view-area").addEventListener("transitionend", setFocusHere);
  document.querySelector(".wp-block-create-block-project-slider").addEventListener("keydown", addKeyboardAccessibility);
}
/******/ })()
;
//# sourceMappingURL=view.js.map