const modal = document.querySelector('.modal');
const modalOverlay = document.getElementById('modal-overlay');
const close = document.getElementsByClassName('close')[0];
const modalContent = document.querySelector('.modal #content');

const defaultClassnames = {
  modal: 'modal',
  close: 'close',
}


// When the user clicks on <span> (x), close the modal
close.onclick = () => {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
modalOverlay.onclick = (event) => {
  if (event.target == modalOverlay) {
    closeModal();
  }
}

function closeModal() {
  modalOverlay.style.display = "none";

  modal.classList = defaultClassnames.modal;
  close.classList = defaultClassnames.close;
}

function openModal(html, classnames = {}) {
  if (classnames.modal) {
    modal.classList.add(classnames.modal);
  }

  if (classnames.close) {
    close.classList.add(classnames.close)
  }

  modalOverlay.style.display = "block";
  modalContent.innerHTML = html;
}
