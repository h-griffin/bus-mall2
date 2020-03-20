/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tBody = document.getElementsByTagName('tBody')[0];
  tBody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tBody = document.getElementsByTagName('tBody')[0];

  // TODO: Iterate over the items in the cart
  console.log(cart.item);
  for(var i = 0; i < cart.items.length; i++) {

  // TODO: Create a TR
  var row = document.createElement('tr');

  // TODO: Create a TD for the delete link, quantity,  and the item
  var linkCell = document.createElement('td');
  linkCell.textContent = 'X';
  linkCell.id = i;
  row.appendChild(linkCell);

  var quantityCell = document.createElement('td');
  quantityCell.textContent = cart.items[i].quantity
  row.appendChild(quantityCell);

  var itemCell = document.createElement('td');
  itemCell.textContent = cart.items[i].product;
  row.appendChild(itemCell);

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tBody.appendChild(row);
  }
}

function removeItemFromCart(event) {
  
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(event.target.id);

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
