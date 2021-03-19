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

function ticketEntrySubmit() {
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
}

document.addEventListener("DOMContentLoaded", () => {
  const entryForm = document.getElementById('ticket-entry');
  const submitButton = document.getElementById('ticket-entry-submit');

  // Determine where we go next based on the prototype version
  entryForm.action = `${PROTOTYPE_VERSION}.html`;

  if (validateFields()) {
    submitButton.removeAttribute('disabled');
  }

  // Add a listener to each form field so we can validate on form change
  [...(document.getElementsByClassName('form-field'))].forEach((field) => {
    field.querySelector('input').addEventListener('input', () => {
      if (validateFields()) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', true);
      }
    });
  });

});
