/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/our-history/view.js ***!
  \*********************************/
if (document.querySelector('.wp-block-create-block-our-history')) {
  const numberOfChildren = document.querySelector(".our-history__scroll-area").children.length;
  for (let i = 0; i < numberOfChildren; i += 1) {
    const tabpanel = Array.from(document.querySelector(".our-history__scroll-area").children)[i];
    const tab = document.createElement("button");
    tab.setAttribute("type", "button");
    tab.setAttribute("role", "tab");
    tab.setAttribute("id", "our-history-tab-" + i);
    tab.classList.add("our-history__tab");
    tab.setAttribute("aria-controls", "our-history-tabpanel-" + i);
    tab.textContent = tabpanel.getAttribute("data-tab-title");
    if (i === 0) {
      tab.setAttribute("aria-selected", "true");
      tabpanel.classList.add("active");
    } else {
      tab.setAttribute("aria-selected", "false");
    }
    document.querySelector(".our-history__tabs").append(tab);
    tabpanel.setAttribute("id", "our-history-tabpanel-" + i);
    tabpanel.setAttribute("aria-labelledby", "our-history-tab-" + i);
  }
  function setMaxHeight() {
    const tabpanelHeights = [...document.querySelectorAll('.wp-block-create-block-our-history-tabpanel .our-history-tabpanel__content')].map(function (item) {
      return item.offsetHeight;
    });
    const maxTabpanelHeight = Math.max(...tabpanelHeights);
    document.querySelector(".wp-block-create-block-our-history .our-history__view-area").style.height = maxTabpanelHeight + 'px';
    document.querySelectorAll('.wp-block-create-block-our-history-tabpanel').forEach(item => {
      item.style.height = maxTabpanelHeight + 'px';
    });
  }
  function showTabContent() {
    const offset = document.getElementById(this.getAttribute("aria-controls")).offsetTop;
    document.querySelector(".wp-block-create-block-our-history .our-history__scroll-area").style.transform = "translateY(-" + offset + "px)";
    document.querySelector('.wp-block-create-block-our-history .our-history__tabs button[aria-selected="true"]').setAttribute("aria-selected", "false");
    this.setAttribute("aria-selected", "true");
    setMaxHeight();
  }
  document.querySelectorAll(".wp-block-create-block-our-history .our-history__tabs button").forEach(button => {
    button.addEventListener('click', showTabContent);
  });
  setMaxHeight();
}
/******/ })()
;
//# sourceMappingURL=view.js.map