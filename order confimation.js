let order =
    JSON.parse(localStorage.getItem("lastOrder"));

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (!order) return;

        let orderId =
            document.getElementById("order-id");

        let total =
            document.getElementById("confirmation-total");

        if (orderId) {
            orderId.innerText = order.id;
        }

        if (total) {
            total.innerText =
                "₹" + order.totalAmount;
        }
    }
);