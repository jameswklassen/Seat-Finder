// -----------------------------------------------------------------
// camera.js
//
// purpose: use on the camera page
// -----------------------------------------------------------------

const shutter = document.getElementById('shutter');
const uploadButton = document.getElementById('upload');

shutter.href = `${PROTOTYPE_VERSION}.html`;

if (!hasGetUserMedia()) {
  alert("getUserMedia() is not supported by your browser");
}

// When the shutter button is clicked, just use default seat info
shutter.onclick = () => {
  localStorage.setItem('seatInfo', JSON.stringify(DEFAULT_SEAT_INFO));
};

// After a file is uploaded, use default seat info
uploadButton.addEventListener("change", () => {
  localStorage.setItem('seatInfo', JSON.stringify(DEFAULT_SEAT_INFO));
  window.location.href = window.location.pathname.replace('camera.html', `${PROTOTYPE_VERSION}.html`);
}, false);
