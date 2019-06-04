// Form Validate JavaScript

var menuButton = document.getElementById('menuButton');
var cartButton = document.getElementById('cartButton');
var menu = document.getElementById('menu');
var cart = document.getElementById('shoppingCart');

cartButton.addEventListener('click', showHide(cart));
menuButton.addEventListener('click', showHide(menu));


function showHide(DOMElement) {
   return function(event){
      if (DOMElement.style.display == 'none'){
         DOMElement.style.display = 'inline-block'; 
      } else {
         DOMElement.style.display = 'none';
      }
   };
}