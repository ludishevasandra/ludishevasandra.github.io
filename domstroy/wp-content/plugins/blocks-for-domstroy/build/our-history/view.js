/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/our-history/view.js ***!
  \*********************************/
if (document.querySelector('.wp-block-create-block-our-history')) {
  function setMaxHeight() {
    const tabpanelHeights = [...document.querySelectorAll('.wp-block-create-block-our-history-tabpanel .our-history-tabpanel__content')].map(item => item.offsetHeight);
    const maxTabpanelHeight = Math.max(...tabpanelHeights);
    document.querySelector(".wp-block-create-block-our-history .our-history__view-area").style.height = maxTabpanelHeight + 'px';
    document.querySelectorAll('.wp-block-create-block-our-history-tabpanel').forEach(item => {
      item.style.height = maxTabpanelHeight + 'px';
    });
  }
  function showTabContent() {
    const tabpanel = document.getElementById(this.getAttribute("aria-controls"));
    const offset = tabpanel.offsetTop;
    document.querySelector(".wp-block-create-block-our-history .our-history__scroll-area").style.transform = "translateY(-" + offset + "px)";
    document.querySelector('.wp-block-create-block-our-history .our-history__tabs button[aria-selected="true"]').setAttribute("aria-selected", "false");
    this.setAttribute("aria-selected", "true");
    document.querySelector('.wp-block-create-block-our-history .wp-block-create-block-our-history-tabpanel[aria-hidden="false"]').setAttribute("aria-hidden", "true");
    tabpanel.setAttribute("aria-hidden", "false");
  }
  // init
  !function () {
    if (document.querySelector('.our-history__tab')) {
      document.querySelectorAll('.our-history__tab').forEach((tab, index) => {
        const tabpanel = Array.from(document.querySelector(".our-history__scroll-area").children)[index];
        tab.textContent = tabpanel.getAttribute("data-tab-title");
        tabpanel.setAttribute("id", "our-history-tabpanel-" + index);
        tabpanel.setAttribute("aria-labelledby", "our-history-tab-" + index);
        index == 0 ? tabpanel.setAttribute("aria-hidden", "false") : tabpanel.setAttribute("aria-hidden", "true");
      });
    }
    // lazy loading set height
    const ourHistoryCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setMaxHeight();
        }
      });
    };
    const ourHistoryObserver = new IntersectionObserver(ourHistoryCallback);
    ourHistoryObserver.observe(document.querySelector('.wp-block-create-block-our-history'));
  }();

  // addEventListener
  document.querySelectorAll(".wp-block-create-block-our-history .our-history__tabs button").forEach(button => {
    button.addEventListener('click', showTabContent);
  });
  window.addEventListener("resize", setMaxHeight);
}
/******/ })()
;
//# sourceMappingURL=view.js.map