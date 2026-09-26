const API_URL = "http://localhost:8080";

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

let user =
    JSON.parse(localStorage.getItem("currentUser"));

function showTotal() {

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    let element =
        document.getElementById("order-total");

    if (element) {
        element.innerText = "₹" + total;
    }
}

async function placeOrder(event) {

    event.preventDefault();

    if (!user) {

        alert("Please login first!");

        window.location.href = "login.html";

        return;
    }

    if (cart.length === 0) {

        alert("Cart is empty!");

        return;
    }

    let address =
        document.getElementById("address").value;

    let phone =
        document.getElementById("phone").value;

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    let order = {

        userId: user.id,

        address: address,

        phone: phone,

        totalAmount: total,

        items: cart
    };

    try {

        let response = await fetch(
            API_URL + "/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(order)
            }
        );

        if (response.ok) {

            let savedOrder =
                await response.json();

            localStorage.setItem(
                "lastOrder",
                JSON.stringify(savedOrder)
            );

            localStorage.removeItem("cart");

            window.location.href =
                "order-confirmation.html";

        } else {

            alert("Order failed!");

        }

    } catch (error) {

        console.log(error);

        alert("Backend connection failed!");
    }
}

document.addEventListener(
    "DOMContentLoaded",
    showTotal
);