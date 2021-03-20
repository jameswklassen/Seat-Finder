const modal = document.querySelector('.modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementsByClassName('close')[0];
const modalContent = document.querySelector('.modal #content');

console.log(modal.classList);

// When the user clicks on <span> (x), close the modal
modalClose.onclick = () => {
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

  modal.classList = null;
  modal.classList = ['modal'];
}

function openModal(html, classnames = '') {
  if (classnames) {
    modal.classList.add(classnames);
  }

  modalOverlay.style.display = "block";
  modalContent.innerHTML = html;
}
