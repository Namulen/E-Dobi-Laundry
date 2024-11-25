// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Modal Logic
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Open Modals on Button Clicks
  document.querySelector('.hero .buttons button:first-child').onclick = () => openModal('signupModal');
  document.querySelector('.hero .buttons button:last-child').onclick = () => openModal('loginModal');
  
  // Close Modal when clicking outside modal-content
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  };
  
  // Update Copyright Year
  document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${year} e-Dobi Technology Inc.`;
  });
  function togglePricingTable() {
    const pricingTable = document.getElementById("pricingTable");
    const seeMoreBtn = document.getElementById("seeMoreBtn");
  
    if (pricingTable.style.display === "none") {
      pricingTable.style.display = "table";
      seeMoreBtn.textContent = "See Less";
    } else {
      pricingTable.style.display = "none";
      seeMoreBtn.textContent = "See More";
    }
  }
  // JavaScript file: script.js

// Initialize cart data
let cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

// Function to add items to cart
function addToCart(itemName, itemPrice) {
  // Add item to the cart
  cart.items.push({ name: itemName, price: itemPrice });
  cart.totalItems++;
  cart.totalPrice += itemPrice;

  // Update the cart summary display
  updateCartSummary();
}

// Function to update cart summary on the main page
function updateCartSummary() {
  const cartItemsList = document.getElementById("cart-items");
  const totalItems = document.getElementById("total-items");
  const totalPrice = document.getElementById("total-price");

  // Clear current items in the cart list
  cartItemsList.innerHTML = '';

  // Display each item in the cart
  cart.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(listItem);
  });

  // Update total items and price
  totalItems.textContent = cart.totalItems;
  totalPrice.textContent = cart.totalPrice.toFixed(2);
}

  // Save cart data to localStorage
localStorage.setItem("cart", JSON.stringify(cart));

  // Retrieve cart data from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  if (savedCart) {
      cart = savedCart;
      updateCartSummary(); // Update display if necessary
  }
});

    // Dynamic Hero Section Text Color
const textElement = document.getElementById("dynamicText");
const colors = ["red", "blue", "green", "orange"];
let colorIndex = 0;

setInterval(() => {
  textElement.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);
document.querySelectorAll('.faq-item h4').forEach(item => {
  item.addEventListener('click', () => {
    const faqAnswer = item.nextElementSibling; // The next sibling is the .faq-answer div
    if (faqAnswer.style.display === 'none' || faqAnswer.style.display === '') {
      faqAnswer.style.display = 'block'; // Show the answer
    } else {
      faqAnswer.style.display = 'none'; // Hide the answer
    }
  });
});
