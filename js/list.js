// var overlay = document.getElementById("modal-overlay");
// var span = document.getElementsByClassName("close")[0];

var directions = document.querySelectorAll(".list .direction");

directions.forEach((direction) => {
  direction.onclick = (e) => {
    const id = direction.getAttribute('id');
    html = `
      <div class="direction-modal">
      <div class="image-container" style="background-image: url('${IMAGE_DIR}/directions/${id}.png')">
      </div>
      ${direction.innerHTML}
      </div>
    `;

    openModal(html, 'direction');
  }
});
