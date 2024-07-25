document.addEventListener("DOMContentLoaded", function () {
    const placeOrderBtn = document.getElementById("place-order-btn");
    const modal = document.getElementById("order-details-modal");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    // Add click event listener to the place order button
    placeOrderBtn.addEventListener("click", function () {
        // Replace this with your logic to fetch cart items, total amount, payment status, etc.
        const cartItems = ["Product 1", "Product 2", "Product 3"];
        const totalAmount = 100; // Example total amount
        const paymentStatus = "Pending"; // Example payment status
        const shippingAddress = "123 Main St, City, Country"; // Example shipping address
        const orderId = "123456"; // Example order ID
        const orderDate = new Date().toLocaleString(); // Example order date

        // Prepare order details HTML
        const orderDetailsHTML = `
            <p><strong>Products:</strong> ${cartItems.join(", ")}</p>
            <p><strong>Total Amount:</strong> $${totalAmount}</p>
            <p><strong>Payment Status:</strong> ${paymentStatus}</p>
            <p><strong>Shipping Address:</strong> ${shippingAddress}</p>
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Order Date:</strong> ${orderDate}</p>
        `;

        // Display order details in the modal
        document.getElementById("order-details").innerHTML = orderDetailsHTML;
        modal.style.display = "block";
    });

    // Add click event listener to close modal button
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Add click event listener to close modal when user clicks outside the modal
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
