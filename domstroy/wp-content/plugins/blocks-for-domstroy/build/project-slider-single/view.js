/******/ (() => { // webpackBootstrap
/*!*******************************************!*\
  !*** ./src/project-slider-single/view.js ***!
  \*******************************************/
function zoomImage(block, event) {
  console.log(event);
  if (block.classList.contains("current")) {
    const figure = event.target.parentElement;
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    const x = offsetX / figure.offsetWidth * 100;
    const y = offsetY / figure.offsetHeight * 100;
    event.target.style.setProperty("--x", x + "%");
    event.target.style.setProperty("--y", y + "%");
  }
}
document.querySelectorAll(".wp-block-create-block-project-slider-single").forEach(block => {
  block.querySelector("figure img").addEventListener("mousemove", event => zoomImage(block, event));
});
/******/ })()
;
//# sourceMappingURL=view.js.map