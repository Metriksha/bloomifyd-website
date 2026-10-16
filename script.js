const products = [
    {
        id: 1,
        title: "Acrylic Photo Frame",
        description: "Capture your favorite memories in elegant acrylic.",
        badge: "Best Seller",
        image: "image/product1.jpeg",
        price: 499
    },
    {
        id: 2,
        title: "Spotify Plaque",
        description: "Turn your special song into a timeless keepsake.",
        badge: "Trending",
        image: "image/product2.jpeg",
        price: 699
    },
    {
        id: 3,
        title: "LED Frame",
        description: "Light up cherished moments with a warm glow.",
        badge: "Most Loved",
        image: "image/product3.jpeg",
        price: 1299
    },
    {
        id: 4,
        title: "Custom Keychain",
        description: "Carry your precious memories wherever you go.",
        badge: "New Arrival",
        image: "image/product4.jpeg",
        price: 299
    },
    {
        id: 5,
        title: "Photo Magnet",
        description: "Bring your favorite moments to life every day.",
        badge: "Trending",
        image: "image/product5.jpeg",
        price: 199
    },
    {
        id: 6,
        title: "Wall Clock",
        description: "Make every moment count with personalized style.",
        badge: "New Arrival",
        image: "image/product6.jpeg",
        price: 899
    }
];

// ===============================
// CART COUNT
// ===============================

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const cart = JSON.parse(localStorage.getItem("bloomifydCart")) || [];

    const totalItems = cart.reduce((total, item) => {
        return total + (Number(item.quantity) || 1);
    }, 0);

    cartCount.textContent = totalItems;
}

updateCartCount();

// ===============================
// MOBILE NAVIGATION
// ===============================


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });
}
