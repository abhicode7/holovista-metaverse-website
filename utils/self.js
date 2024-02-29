// utilities.ts
function smoothScroll(targetSelector, duration) {
    if (!document || !window) return null;
   const el = document.querySelector(targetSelector);
   if(!el) return null;
   window.scroll({
     behavior: 'smooth',
     left: 0,
     top: el.offsetTop,
     block: 'start',
     inline: 'nearest',
   });
};
export { smoothScroll };