// =========================
// ADD TO CART
// =========================

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

}


// =========================
// DISPLAY CART
// =========================

function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cart.forEach((item, index) => {

            let itemTotal = item.price * item.quantity;

            total += itemTotal;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <h3>${item.name}</h3>

                    <p>Price: ₹${item.price}</p>

                    <p>
                        Quantity:
                        <button onclick="decreaseQuantity(${index})">−</button>

                        ${item.quantity}

                        <button onclick="increaseQuantity(${index})">+</button>
                    </p>

                    <p>
                        Item Total: ₹${itemTotal}
                    </p>

                    <button onclick="removeItem(${index})">
                        Remove
                    </button>

                    <hr>

                </div>
            `;
        });
    }

    cartTotal.innerHTML = "Total: ₹" + total;
}


// =========================
// INCREASE QUANTITY
// =========================

function increaseQuantity(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// =========================
// DECREASE QUANTITY
// =========================

function decreaseQuantity(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// =========================
// REMOVE ITEM
// =========================

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// =========================
// PLACE ORDER PAGE
// =========================

function goToPlaceOrder() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "place-order.html";
}


// =========================
// LOAD CART
// =========================

displayCart();
// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Please enter Email and Password");
            return;
        }

        alert("Login Successful!");

        window.location.href = "index.html";

    });

}