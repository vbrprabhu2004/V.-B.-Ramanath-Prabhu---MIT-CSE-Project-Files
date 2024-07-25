document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    ];

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    const updateCart = () => {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = cart.map(item => `<div>${item.name} - $${item.price.toFixed(2)}</div>`).join('');
    };

    const addToCart = (product) => {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    const renderProducts = () => {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = products.map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add to Cart</button>
            </div>
        `).join('');
    };

    document.getElementById('cart-button').addEventListener('click', () => {
        cartItems.classList.toggle('show');
    });

    const generateOrderId = () => 'ORD' + Math.floor(Math.random() * 1000000);
    const getUserId = () => 'USER123'; // Placeholder user ID
    const getOrderDate = () => new Date().toLocaleString();
    const getPaymentStatus = () => 'Paid'; // Placeholder payment status
    const getShippingAddress = () => '1234 Elm Street, Springfield, USA'; // Placeholder shipping address

    const placeOrder = () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const orderId = generateOrderId();
        const userId = getUserId();
        const orderDate = getOrderDate();
        const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        const paymentStatus = getPaymentStatus();
        const shippingAddress = getShippingAddress();

        document.getElementById('order-id').textContent = orderId;
        document.getElementById('user-id').textContent = userId;
        document.getElementById('order-date').textContent = orderDate;
        document.getElementById('total-amount').textContent = totalAmount;
        document.getElementById('payment-status').textContent = paymentStatus;
        document.getElementById('shipping-address').textContent = shippingAddress;

        document.getElementById('order-modal').style.display = 'block';
    };

    document.getElementById('place-order-button').addEventListener('click', placeOrder);

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('order-modal').style.display = 'none';
    });

    renderProducts();
    updateCart();
});

// Define the addToCart function globally so it can be called from inline HTML
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.dispatchEvent(new Event('DOMContentLoaded')); // Refresh cart display

}
