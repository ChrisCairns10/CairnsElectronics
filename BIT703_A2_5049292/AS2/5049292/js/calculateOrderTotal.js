/* Calculate all prices (subtotal, tax and order total) */

// Calculate subtotal
var quantity = localStorage.getItem("Quantity")
var price = quantity * 300;
localStorage.setItem("Subtotal", price);
document.getElementById("subTotal").value = "$" + price;

// Calculate subtotal + taxes
var taxTotal = 13 * quantity;
localStorage.setItem("Taxes", taxTotal);
document.getElementById("taxes").value = "$" + taxTotal;

// Calculate if shipping is free or not
if(price >= 1000) {
    document.getElementById("deliveryCost").value = "FREE";
    var orderTotal = price + taxTotal;
    localStorage.setItem("Total", orderTotal);
    document.getElementById("total").value = "$" + orderTotal;
    document.getElementById("radioFree").checked = true;
    document.getElementById("radioNextDay").disabled = true;
}
else if(price >= 1 & price < 1000) {
    document.getElementById("deliveryCost").value = "$20";
    var orderTotal = (price + taxTotal) + 20;
    localStorage.setItem("Total", orderTotal)
    document.getElementById("total").value = "$" + orderTotal;
    document.getElementById("radioNextDay").checked = true;
    document.getElementById("radioFree").disabled = true;
}
else if(price == 0) {
    document.getElementById("deliveryCost").value = "FREE";
    document.getElementById("total").value = "$0";
}


// Update order cost totals if quantity is changed 
function recalculateOrderTotal() {
    var updatedQuantity = document.getElementById("cartQuantity").value;
    localStorage.setItem("Updated Quantity", updatedQuantity);
    localStorage.setItem("Quantity", updatedQuantity);

    // Calculate subtotal
    //updateQuantity = localStorage.getItem("updatedQuantity");
    var updatedPrice = updatedQuantity * 300;
    localStorage.setItem("Updated Subtotal", updatedPrice);
    document.getElementById("subTotal").value = "$" + updatedPrice;

    // Calculate subtotal + taxes
    var updatedTaxTotal = 13 * updatedQuantity;
    localStorage.setItem("Updated Taxes", updatedTaxTotal);
    document.getElementById("taxes").value = "$" + updatedTaxTotal;

    // Calculate if shipping is free or not
    if(updatedPrice >= 1000) {
        document.getElementById("deliveryCost").value = "FREE";
        var updatedOrderTotal = updatedPrice + updatedTaxTotal;
        localStorage.setItem("Updated Total", updatedOrderTotal);
        document.getElementById("total").value = "$" + updatedOrderTotal;
        document.getElementById("radioFree").checked = true;
        document.getElementById("radioNextDay").disabled = true;
    }
    else if(updatedPrice >= 1 & updatedPrice < 1000) {
        document.getElementById("deliveryCost").value = "$20";
        var updatedOrderTotal = (updatedPrice + updatedTaxTotal) + 20;
        localStorage.setItem("Updated Total", updatedOrderTotal);
        document.getElementById("total").value = "$" + updatedOrderTotal;
        document.getElementById("radioNextDay").checked = true;
        document.getElementById("radioFree").disabled = true;
    } 
    else if(updatedPrice == 0) {
        document.getElementById("deliveryCost").value = "FREE";
    }
}
