/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/go-to-top/view.js ***!
  \*******************************/
function scrollToTop() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
document.querySelector(".wp-block-create-block-go-to-top .go-to-top__button").onclick = scrollToTop;
/******/ })()
;
//# sourceMappingURL=view.js.map