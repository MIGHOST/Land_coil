const scrollButton = document.getElementById('scrollBtn');
window.onscroll = function () {
  scrollFunction();
};
const scrollFunction =() => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};
scrollButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
