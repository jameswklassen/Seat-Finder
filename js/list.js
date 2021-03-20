var directions = document.querySelectorAll(".list .direction");

directions.forEach((direction) => {
  direction.onclick = () => {

    // fill the modal with this HTML
    html = `
    <div class="direction-modal">
    <div class="image-container" style="background-image: url('${IMAGE_DIR}/directions/${direction.getAttribute('id')}.png')">
    </div>
    ${direction.innerHTML}
    </div>
    `;

    // add custom classnames to the modal/close button
    classNames = {
      modal: 'direction',
      close: 'btn',
    }

    openModal(html, classNames);
  }
});
