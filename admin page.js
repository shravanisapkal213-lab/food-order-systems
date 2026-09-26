const API_URL = "http://localhost:8080";

async function loadAdminOrders() {

    try {

        let response =
            await fetch(API_URL + "/api/orders");

        let orders =
            await response.json();

        let container =
            document.getElementById("admin-orders");

        container.innerHTML = "";

        orders.forEach(order => {

            container.innerHTML += `

                <tr>

                    <td>${order.id}</td>

                    <td>${order.userId || ""}</td>

                    <td>₹${order.totalAmount}</td>

                    <td>${order.status || "PLACED"}</td>

                </tr>
            `;
        });

    } catch (error) {

        console.log(error);

        alert("Orders could not be loaded!");
    }
}

async function loadAdminUsers() {

    try {

        let response =
            await fetch(API_URL + "/api/users");

        let users =
            await response.json();

        let container =
            document.getElementById("admin-users");

        container.innerHTML = "";

        users.forEach(user => {

            container.innerHTML += `

                <tr>

                    <td>${user.id}</td>

                    <td>${user.name}</td>

                    <td>${user.email}</td>

                    <td>${user.role}</td>

                </tr>
            `;
        });

    } catch (error) {

        console.log(error);

        alert("Users could not be loaded!");
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadAdminOrders();

        loadAdminUsers();

    }
);