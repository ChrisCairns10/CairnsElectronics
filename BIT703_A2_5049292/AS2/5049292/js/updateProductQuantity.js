/* Counts the number of times the 'Add To Cart' button is clicked' and stores in Local Storage */

// Counts the number of clicks (quantity required)
function updateQuantity() {
    var count = 1;
    var button = document.getElementById("quantityButton");
    localStorage.setItem("Quantity", count);
    button.onclick = function() {
        count++;
        //localStorage.clear(0);
        localStorage.setItem("Quantity", count);
        console.log(count);
    }
} 
