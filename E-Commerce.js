// script.js

// Function to display the home section
function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('basket').style.display = 'none';
}

// Function to display the shop section
function showShop() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('shop').style.display = 'block';
    document.getElementById('basket').style.display = 'none';
}

// Function to display the basket section
function showBasket() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('basket').style.display = 'block';
}
function redirectToShop() {
    showShop(); // Call the function to display the shop section
    window.scrollTo(0, 0); // Scroll to the top of the page
}
// Array to store items in the cart
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Push the item object to the cart array
    cart.push({ name: itemName, price: itemPrice });
    // Show a dialog indicating the item is added to the cart
    alert(`${itemName} added to cart`);
    // Display the updated basket
    displayBasket();
}


// Function to display the basket with items and total price
function displayBasket() {
    let basketHTML = '<h2></h2>';
    let totalPrice = 0;
    cart.forEach(item => {
        basketHTML += `<p>${item.name} - $${item.price}</p>`;
        totalPrice += item.price;
    });
    if (cart.length === 0) {
        basketHTML += `<p>Your basket is empty</p>`;
    
    }
    document.getElementById('basket-items').innerHTML = basketHTML;
}

// Function to clear the basket
function clearBasket() {
    cart = [];
    displayBasket();
}


// Function to handle the checkout process
function checkout() {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });
    alert(`Total Price: $${totalPrice}`);
}

// Populate the shop section with products
document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: 'Winter', price: 10, image: 'https://i.pinimg.com/736x/16/81/f4/1681f4691707948485b6cb5aea870646.jpg' },
        { name: 'Eunchae', price: 20, image: 'https://i.pinimg.com/736x/90/2a/55/902a55b45108c3c77accf72c42eec16d.jpg' },
        { name: 'Hyein', price: 15, image: 'https://i.pinimg.com/564x/f3/1d/0a/f31d0a89ee8e50022b4964249d68e9d9.jpg' }
    ];

    let shopHTML = '<h2>Shop Items</h2>';
    items.forEach(item => {
        shopHTML += `
            <div class="product">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name} - $${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            </div>
        `;
    });
    document.querySelector('.product-container').innerHTML = shopHTML;

});
 document.addEventListener('DOMContentLoaded', function() {
    showHome(); // Display the home section
});
