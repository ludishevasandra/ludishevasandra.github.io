/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/burger-button/view.js ***!
  \***********************************/
function collapseSidebar() {
  const sidemenu = document.querySelector(".template-part-sidebar__collapse");
  if (sidemenu) {
    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    }
  }
}
document.querySelector(".wp-block-create-block-burger-button").onclick = collapseSidebar;
/******/ })()
;
//# sourceMappingURL=view.js.map