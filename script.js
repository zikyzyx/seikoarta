let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    alert('Terima kasih telah berbelanja! Total belanja Anda adalah Rp' + totalPrice);
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
}
