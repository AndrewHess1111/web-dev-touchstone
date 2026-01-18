// ===============================
// SHOPPING CART (sessionStorage)
// ===============================

// Add item to cart
function addToCartAlert() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push("Sample Item");
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
}

// Clear cart
function clearCartAlert() {
    sessionStorage.removeItem("cart");
    alert("Cart cleared");
}

// Process order (also clears cart)
function processOrderAlert() {
    sessionStorage.removeItem("cart");
    alert("Order processed");
}

// ===============================
// CONTACT FORM (localStorage)
// ===============================

function submitFormAlert() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let orderInfo = {
        name: name,
        email: email
    };

    localStorage.setItem("customOrder", JSON.stringify(orderInfo));
    alert("Order saved");
}

