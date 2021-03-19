// -----------------------------------------------------------------
// navigation.js
//
// purpose: Used on all navigation pages (i.e. map/list pages)
// -----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // Grab seat info from LocalStorage
  const seatInfo = JSON.parse(localStorage.getItem('seatInfo'));

  // Fill page based on seat info
  TICKET_FIELDS.forEach((field) => {
    document.querySelector(`#${field} .value`).innerHTML = seatInfo[field]
  });
});
