const products = [
    { id: 1, name: "Reloj Rolex", price: 35000000, image: "assets/rolex.jpg" },
    { id: 2, name: "Cadena Oro 24K", price: 15000000, image: "assets/cadena-oro.jpg" },
    { id: 3, name: "Reloj Omega", price: 18000000, image: "assets/omega.jpg" },
    { id: 4, name: "Cadena de Platino", price: 22000000, image: "assets/platino.jpg" },
    { id: 5, name: "Reloj Cartier", price: 25000000, image: "assets/cartier.jpg" },
    { id: 6, name: "Cadena Oro Rosa", price: 19000000, image: "assets/oro-rosa.jpg" },
    { id: 7, name: "Reloj Patek Philippe", price: 130000000, image: "assets/patek.jpg" },
    { id: 8, name: "Cadena Diamantes", price: 50000000, image: "assets/diamantes.jpg" },
    { id: 9, name: "Reloj Audemars Piguet", price: 80000000, image: "assets/audemars.jpg" },
    { id: 10, name: "Reloj Tag Heuer", price: 22000000, image: "assets/tagheuer.jpg" },
    { id: 11, name: "Reloj Hublot", price: 45000000, image: "assets/hublot.jpg" },
    { id: 12, name: "Cadena Oro Blanco", price: 18000000, image: "assets/oro-blanco.jpg" },
    { id: 13, name: "Reloj Longines", price: 16000000, image: "assets/longines.jpg" },
    { id: 14, name: "Cadena Oro 18K", price: 14000000, image: "assets/oro-18k.jpg" },
    { id: 15, name: "Reloj Breitling", price: 20000000, image: "assets/breitling.jpg" },
    { id: 16, name: "Cadena Oro Amarillo", price: 13000000, image: "assets/oro-amarillo.jpg" },
    { id: 17, name: "Reloj Panerai", price: 21000000, image: "assets/panerai.jpg" },
    { id: 18, name: "Cadena Esmeralda", price: 25000000, image: "assets/esmeralda.jpg" },
    { id: 19, name: "Reloj IWC", price: 24000000, image: "assets/iwc.jpg" },
    { id: 20, name: "Cadena Perlas", price: 15000000, image: "assets/perlas.jpg" }
];
const cart = [];
const cartItemsContainer = document.getElementById("cart-items");
const totalAmountEl = document.getElementById("total-amount");
const currencyFormat = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" });
function renderProducts() {
    const productList = document.querySelector(".products-container");
    products.forEach((product) => {
        const productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${currencyFormat.format(product.price)}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productList.appendChild(productEl);
    });
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) cart.push(product);
    updateCart();
}
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p>${item.name} - ${currencyFormat.format(item.price)}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    totalAmountEl.textContent = `Total: ${currencyFormat.format(total)}`;
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        alert("Compra exitosa. ¡Gracias por tu compra de productos de lujo!");
        cart.length = 0;  
        updateCart();
    }
});
renderProducts();
