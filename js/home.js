// Only for use on the homepage to set the correct prototype

document.getElementById('prototype-a').onclick = () => {
  localStorage.setItem('prototype', 'map');
};

document.getElementById('prototype-b').onclick = () => {
  localStorage.setItem('prototype', 'list');
};
