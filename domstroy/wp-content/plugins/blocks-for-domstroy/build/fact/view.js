/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/fact/view.js ***!
  \**************************/
if (document.querySelector('.wp-block-create-block-fact')) {
  const facts = document.querySelectorAll('.wp-block-create-block-fact');
  const factsCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  };
  const factsOptions = {
    rootMargin: '0px 0px 150px 0px'
  };
  const factsObserver = new IntersectionObserver(factsCallback, factsOptions);
  facts.forEach(project => factsObserver.observe(project));
}
/******/ })()
;
//# sourceMappingURL=view.js.map