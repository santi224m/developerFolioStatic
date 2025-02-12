const top_btn = document.getElementById('topButton');

top_btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});