var overlay = document.getElementById("modal-overlay");
var btn = document.getElementById("help-button");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = () => {
  overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  overlay.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
overlay.onclick = (event) => {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}
