/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/dialog-button/view.js ***!
  \***********************************/
function openModal() {
  const dialog = this.closest(".wp-block-create-block-dialog-button").lastElementChild;
  if (dialog.matches(".wp-block-create-block-dialog")) {
    dialog.showModal();
  }
}
if (document.querySelector(".wp-block-create-block-dialog-button .wp-block-button button")) {
  document.querySelectorAll(".wp-block-create-block-dialog-button .wp-block-button button").forEach(button => button.onclick = openModal);
}
/******/ })()
;
//# sourceMappingURL=view.js.map