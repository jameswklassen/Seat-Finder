// Only for use on the homepage to set the correct prototype
// We may refactor this out 
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('prototype-a').addEventListener('click', () => {
    localStorage.setItem('prototype', 'map');
  });

  document.getElementById('prototype-b').addEventListener('click', () => {
    localStorage.setItem('prototype', 'list');
  });
});
