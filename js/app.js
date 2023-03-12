function submitOrder(event) {
  event.preventDefault(); // Prevents the form from submitting normally
  
  // Get the values from the form fields
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const phone = document.getElementById('phone').value;
  const foodItem = document.getElementById('food-item').value;
  const foodTruck = document.getElementById('food-truck').value;
  
  
  // Call the function that displays the popup with the data 
  displayConfirmationPopup(firstName, lastName, phone, foodItem, foodTruck);
}

function displayConfirmationPopup(firstName, lastName, phone, foodItem, foodTruck) {
  const message = `Thank you for your order, ${firstName} ${lastName}!\nWe will contact you at ${phone} when your ${foodItem} from ${foodTruck} is ready.`;
  alert(message);
}

  
