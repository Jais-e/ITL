'use strict';
let visible = false;
let consent = false;

document.querySelector("#showMore").onclick = function() {
 toggle();
};

function toggle(){

  if (visible == false){
    document.querySelector("#card2").style.display = "block";
    document.querySelector("#showMore").innerHTML = "Skjul detaljer<img id='dropDownIcon' src='images/chevron-up-light.svg' alt='chevron-up-light'>";
    document.querySelector("#dropDownIcon").style.transform = "rotate(0deg)";
    visible = true;
  }
  else{
    document.querySelector("#card2").style.display = "none";
    document.querySelector("#showMore").innerHTML = "Vis detaljer<img id='dropDownIcon' src='images/chevron-up-light.svg' alt='chevron-up-light'>";
    document.querySelector("#dropDownIcon").style.transform = "rotate(180deg)";
    visible = false
  }
};
// Web storage
document.querySelector("#cookie-consent").onclick = function(){
consent = true;
  console.log(consent);
  // store value in local storage
  localStorage.setItem("boolean", consent);
  // call loadFromStorage to update displayed values
  loadFromStorage();
document.querySelector("#cookie").style.display = "none";
};
function loadFromStorage() {
  // get data from local storage
  consent = localStorage.getItem("boolean");
  console.log(consent);
}
loadFromStorage();
if (consent== "true"){
  document.querySelector("#cookie").style.display = "none";
};
