'use strict';
let visible = false;
let consent = false;
let maxWidth = 480;
let winWidth = window.innerWidth;
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
document.querySelector("#tab2").onclick = function(){
  activeTab();
  document.querySelector("#tab2").style.borderTopLeftRadius ="5px";
  document.querySelector("#nemId").style.display = "none";
  document.querySelector("#login").style.display = "block";


};
document.querySelector("#tab1").onclick = function(){
  activeTab();
  document.querySelector("#login").style.display = "none";

  if (winWidth < maxWidth){
    document.querySelector("#nemId").style.display = "block";

  }else
  {
    document.querySelector("#nemId").style.display = "flex";
  }
};

function activeTab(){
  let tab1 = document.getElementById("tab1").className;
  let tab2 = document.getElementById("tab2").className;
  if (tab1 != "tab active" || tab2 === "tab active"){
    document.getElementById("tab1").className = "tab active";
    document.getElementById("tab2").className = "tab"
    document.getElementById("tab1").style.pointerEvents = "none";
    document.getElementById("tab2").style.pointerEvents = "auto";
  }
  else if (tab1 === "tab active"){
    document.getElementById("tab1").className = "tab"
    document.getElementById("tab2").className = "tab active";
    document.getElementById("tab2").style.pointerEvents = "none";
    document.getElementById("tab1").style.pointerEvents = "auto";
  }
};

// Web storage
document.querySelector("#cookie-consent").onclick = function(){
consent = true;
  console.log(consent);
  activeTab();
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
  activeTab();
};
