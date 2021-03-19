// -----------------------------------------------------------------
// ticket-entry.js
//
// purpose: use on the ticket-entry page
// -----------------------------------------------------------------

function validateFields() {
  let valid = true;
  TICKET_FIELDS.forEach((field) => {
    if (document.getElementById(field).value === '') {
      valid = false;
    }
  });
  return valid;
}

document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById('save');

  // Determine where we go next based on the prototype version
  saveButton.href = `${PROTOTYPE_VERSION}.html`;

  // Save ticket information in LocalStorage
  saveButton.addEventListener('click', () => {
    const seatInfo = {};

    TICKET_FIELDS.forEach((field) => {
      if (document.getElementById(field).value !== '') {
        seatInfo[field] = document.getElementById(field).value;
      }
    });

    // Only save if seatInfo isn't empty
    if (!isEmpty(seatInfo)) {
      localStorage.setItem('seatInfo', JSON.stringify(seatInfo));
    }
  });

  if (validateFields()) {
    saveButton.removeAttribute('disabled');
  }

  // Add a listener to each form field so we can validate on form change
  [...(document.getElementsByClassName('form-field'))].forEach((field) => {
    field.querySelector('input').addEventListener('input', () => {
      if (validateFields()) {
        saveButton.removeAttribute('disabled');
      } else {
        saveButton.setAttribute('disabled', true);
      }
    });
  });

});
