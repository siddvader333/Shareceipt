﻿
function myFunction() {

  var firstNameInput = document.getElementById("firstName"); //textbox to add first name
  var lastNameInput = document.getElementById("lastName");//textbox to add last name
  var emailInput = document.getElementById("emailInput");//textbox to add email
  
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //var cell4 = row.insertCell(3, GamepadButton);
  
    //cell4.style = "Button"
  
    //set output text
    cell1.innerHTML = firstNameInput.value;
    cell2.innerHTML = lastNameInput.value;
    cell3.innerHTML = emailInput.value;
    //cell4.innerHTML = "Delete";
  
    //clear input text boxes
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
  
  }
//used for deleting buttons
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("list_of_people").deleteRow(i);
}