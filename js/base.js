// -----------------------------------------------------------------
// base.js
//
// purpose: common constants and functions
// -----------------------------------------------------------------


// Constants
// -----------------------------------------------------------------
const TICKET_FIELDS = ['section', 'row', 'seat'];
const PROTOTYPE_VERSION = localStorage.getItem('prototype') || 'map';

const DEFAULT_SEAT_INFO = {
  section: 120,
  row: 10,
  seat: 14
};


// Helper functions
// -----------------------------------------------------------------

// Check if the client can use camera
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// Check if an object is empty
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
