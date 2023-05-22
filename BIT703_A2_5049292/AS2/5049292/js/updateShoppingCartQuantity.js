/* Retrieves chosen product quantity from Local Storage and updates Shopping Cart */

var cartQuan = localStorage.getItem("Quantity");
document.getElementById("cartQuantity").value = cartQuan;
