
function updateTotalPrice() {
  // Get all cart items in the list
  const cartItems = document.querySelectorAll("#cart-items li");
  let totalPrice = 0;

  // Calculate the total price by iterating through each item
  cartItems.forEach(item => {
    const price = parseInt(item.getAttribute("data-price"));
    const quantity = parseInt(item.querySelector(".quantity").innerText);
    totalPrice += price * quantity;
  });

  // Update the total price in the HTML
  document.getElementById("total-price").innerText = totalPrice;
}

function decreaseQuantity(button) {
  // Get the quantity element for the item
  const quantityElement = button.nextElementSibling;
  let quantity = parseInt(quantityElement.innerText);

  // Decrease the quantity if greater than 1
  if (quantity > 1) {
    quantity--;
    quantityElement.innerText = quantity;
    updateTotalPrice(); // Update the total price after decreasing quantity*//
  }
}

function increaseQuantity(button) {
  // Get the quantity element for the item
  const quantityElement = button.previousElementSibling;
  let quantity = parseInt(quantityElement.innerText);
  quantity++;

  // Increase the quantity
  quantityElement.innerText = quantity;
  updateTotalPrice(); // Update the total price after increasing quantity
}

function deleteItem(button) {
  // Get the list item element containing the item details
  const liElement = button.closest("li");

  // Get the image element associated with the item
  const imageElement = liElement.querySelector("img");

  // Remove both the list item and the associated image
  liElement.remove();
  imageElement.remove();

  updateTotalPrice(); // Update the total price after deleting an item
}

function likeItem(button) {
  // Toggle the "liked" class to change button appearance
  button.classList.toggle("liked");
}

// Initial total price update on page load
updateTotalPrice();
