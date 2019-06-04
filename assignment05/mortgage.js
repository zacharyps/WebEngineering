// a Mortgage Calculator in javaScript

    ///assign HTML elements to variables///
var apr = document.getElementById("apr");
var term = document.getElementById("term");
var amount = document.getElementById("amount");

//in and req arrays
var inputBox = document.getElementsByClassName("in");
var req = document.getElementsByClassName("required"); 

//output element
var payment = document.getElementById("payment");

//buttons
var mortgageButton = document.getElementById("calculate");


     /// Add event listeners to elements ///
apr.addEventListener(blur, checkApr);
term.addEventListener("click", checkTerm);
amount.addEventListener("blur", checkAmount);
mortgageButton.addEventListener("click", calculateMortgage);

     /// check if a field is empty ///
function isEmpty(ele){
   return ele.innerHTML == '';
}

function showAlert(i, message){
   required[i].style.display = "block";
   inputBox[i].style.backgroundColor = "rgba(255, 99, 71, 0.5)";
}

function hideAlert(i){
   required[i].style.display = "none";
   inputBox[i].style.backgroundColor = "white";
}

    /// Check data in each field ///
function checkApr(){
   if (isEmpty(apr)){
      showAlert(0,"Required Field");
   } else {
      hideAlert(0);
      if (apr.value < 0 || apr.value > 25){
         showAlert(0,"Must be 0.00-25.00%");
      }
   }
   return;
}

function checkTerm(){
   if (isEmpty(term)){
      showAlert(1,"Required Field");
   } else {
      hideAlert(1);
      if (term.value <= 0 || term.value > 40){
         showAlert(1,"Must be 0-40 years");
      }
   }
   return;
}

function checkAmount(){
   if (isEmpty(amount)){
      showAlert(2,"Required Field");
   } else {
      hideAlert(2);
      if (amount.value < 0){
         showAlert(2,"Must be greater than 0");
      }
   }
   return;
}

function calculateMortgage(){
   
}