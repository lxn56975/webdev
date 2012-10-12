window.onload=function(){
  setCombobox();
}

// ----------------------------------------------------------------- //
// Loop through each select on the page, and check its class.  If it //
// has a class of comboBox, then attach the needed elements       //
// ------------------------------------------------------------------//

var nTop;
var nLeft;
var detect = navigator.userAgent.toLowerCase();

function setCombobox() {
  combos=$$('select.combobox');
  for(i=0; i<combos.length; i++) {
    nLeft = Position.positionedOffset(combos[i])[0];
    nTop = Position.positionedOffset(combos[i])[1];		
    inittextfield(combos[i]);
    //Use iframe hack for Internet Explorer
    if(!(detect.indexOf("opera") + 1) && (detect.indexOf("msie") + 1)) {
      initIframe(combos[i]);
    }
  }
}

// ------------------------------------------------------------------ //
// Create the textfield and move it to desired position               //
// ------------------------------------------------------------------ //

function inittextfield(ctrl) {
  
  selectWidth = ctrl.offsetWidth;  
  
  //Create textfield
  textfield = document.createElement("input");
  textfield.id = "txt" + ctrl.name;
  textfield.className = "comboText";
  textfield.style.zIndex = "99999";
  
  if(ctrl.value == "") {
    textfield.value = "填写或选择";
    textfield.style.color = "#ccc";
  }else{
  textfield.value = ctrl.value;
}


textfield.style.position = "absolute";
textfield.style.top = nTop + "px";
textfield.style.left = nLeft + "px";
textfield.style.border = "none";

//Account for Browser Interface Differences Here
if((detect.indexOf("safari") + 1)) {
  selectButtonWidth = 18
  textfield.style.marginTop = "0px";
  textfield.style.marginLeft = "0px";
}
else if((detect.indexOf("opera") + 1)) {
  selectButtonWidth = 27;
  textfield.style.marginTop = "4px";
  textfield.style.marginLeft = "4px";
}
else {
  selectButtonWidth = 27;
  textfield.style.marginTop = "2px";
  textfield.style.marginLeft = "3px";
}

textfield.style.width = (selectWidth - selectButtonWidth) + "px";

ctrl.parentNode.appendChild(textfield);	

ctrl.onchange=function() {
  val = this.options[this.selectedIndex].value;	
  document.getElementById("txt" + this.name).value = val;
}

ctrl.onfocus=function() {
  document.getElementById("txt" + this.name).style.color = "#333";
}

textfield.onfocus=function() {
  this.style.color = "#333";
  this.select();
}

textfield.onchange=function() {
  ctrl.options[0].value = document.getElementById("txt" + ctrl.name).value;
  ctrl.options[0].selected = true;
}	
}

// ------------------------------------------------------------------ //
// Internet Explorer hack requires an empty iFrame.  We need to add   //
// one right underneath the div -> it will make the zindex work       //
// ------------------------------------------------------------------ //

function initIframe(ctrl) {
  textWidth = textfield.offsetWidth;
  textHeight = textfield.offsetHeight;
  hackFrame = document.createElement("iframe");
  hackFrame.setAttribute("src", "placeholder.html");
  hackFrame.setAttribute("scrolling", "0");
  hackFrame.setAttribute("tabindex", "-1");
  hackFrame.id = "frame" + ctrl.name;
  hackFrame.style.position = "absolute";
  hackFrame.style.width = textWidth + "px";
  hackFrame.style.height = textHeight + "px";
  hackFrame.style.top = nTop + "px";
  hackFrame.style.left = nLeft + "px";
  hackFrame.style.marginTop = "3px";
  hackFrame.style.marginLeft = "3px";
  ctrl.parentNode.insertBefore(hackFrame, textfield);
}