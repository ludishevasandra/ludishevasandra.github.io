/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/dialog/view.js ***!
  \****************************/
function closeModal(dialog) {
  dialog.close();
  document.body.classList.remove("scroll-lock");
}
function setLocation(dialog) {
  const select = dialog.querySelector(".wpcf7-form span[data-name=\"your-location\"] select");
  if (select) {
    for (let option of select.children) {
      if (option.value == dialog.getAttribute("data-location")) {
        option.setAttribute("selected", "true");
        select.setAttribute("disabled", "true");
      }
    }
  }
}
function printFileName(event) {
  const output = event.target.closest("label").lastElementChild;
  if (output.matches(".cv-file-name")) {
    output.innerText = encodeURIComponent(event.target.files[0].name);
  }
}
if (document.querySelector(".wp-block-create-block-dialog .wpcf7-form .wpcf7-file")) {
  document.querySelectorAll(".wp-block-create-block-dialog .wpcf7-form .wpcf7-file").forEach(input => input.onchange = printFileName);
}
document.querySelectorAll(".wp-block-create-block-dialog").forEach(dialog => setLocation(dialog));
document.querySelectorAll(".wp-block-create-block-dialog").forEach(dialog => {
  dialog.addEventListener("click", function ({
    currentTarget,
    target
  }) {
    if (target === currentTarget) closeModal(dialog);
  });
  if (dialog.querySelector(".wp-block-dialog__close-button")) {
    dialog.querySelector(".wp-block-dialog__close-button").addEventListener("click", function () {
      closeModal(dialog);
    });
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map