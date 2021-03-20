const helpButton = document.getElementById('help-button');


helpButton.onclick = () => {
  helpText = `
  <h2>Help Desk</h2>
  <p>Section 200</p>
  <p></b>204-555-5555</b></p>
  
  <div class="button-container">
  <a href="" class="btn secondary">Cancel</a>
  <a href="" class="btn call"><span class="material-icons">call</span>Call</a>
  </div>
  `

  openModal(helpText);
}
