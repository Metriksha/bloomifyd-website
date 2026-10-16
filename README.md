# Bloomifyd — Personalized Gifts

Bloomifyd is a front-end website for browsing personalized gifts and preparing orders through WhatsApp. It is built with HTML, CSS, and vanilla JavaScript.

## Features

- Homepage and product catalogue
- Product detail pages with configurable options
- Client-side photo preview and custom text fields
- Cart stored in browser `localStorage`
- Checkout form and WhatsApp order handoff
- Contact links and responsive styling

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.
3. Browse products and test the cart and checkout flow.

No package installation is required for this static website. Checkout uses a public postal PIN lookup endpoint.

## Important limitations

- This is a front-end project, not a complete production e-commerce backend. Cart data is stored locally in the browser.
- Uploaded photos are previewed in the browser; they are not automatically attached to WhatsApp. Customers must send original images in the WhatsApp chat when requested.
- Do not enter real customer or payment information while testing.
- Payment processing, server-side order storage, authentication, and an admin dashboard are not implemented as backend services in this version.

## Technologies

HTML5 · CSS3 · JavaScript · Browser `localStorage`

## Project structure

- `index.html` — homepage
- `products.html` — product catalogue
- `product.html` — product customization
- `cart.html` — shopping cart
- `checkout.html` — checkout and WhatsApp handoff
- `contact.html` — contact page
- `style.css` — site styling
- `script.js` — shared site interactions
- `image/` — public website images and icons
