# NO SAINT — Frontend Developer Intern Assignment

## Overview

Welcome to the **NO SAINT** frontend assignment. You have been given a luxury fragrance brand website built with React. The codebase has **intentional bugs**, and there are **new features** to build.

**Duration:** 2 days (48 hours from the time you receive this)

Your job is to:
1. Find and fix bugs
2. Add UI polish and animations
3. Build a product detail page with API integration
4. Implement a mock checkout flow with Razorpay

---

## Tech Stack (Already Set Up)

- **React 19** with TypeScript
- **Vite 8** (dev server & build)
- **Tailwind CSS v4** (styling)
- **Lucide React** (icons)

## Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd NoSaint/template/template-1

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs on `http://localhost:5173` (or the port shown in terminal).

---

## Part 1: Bug Fixes (20 Points)

The codebase has **5 intentional bugs**. Find and fix each one.

### Bug 1 — Product Cards All Highlight Together
**File:** `src/components/Products.tsx`
**What's wrong:** When you hover over any single product card, ALL four cards display hover effects (image zoom, red accent line, "VIEW SCENT" text) simultaneously. Each card should respond to hover independently.

### Bug 2 — Email Signup Form Never Shows Success
**File:** `src/components/EmailCTA.tsx`
**What's wrong:** The "JOIN THE SAINTS" email form has two issues:
- Submitting a valid email does NOT show the "YOU'RE IN. WELCOME TO THE DARK SIDE." confirmation message
- The form accepts empty submissions (no validation)

Fix both issues.

### Bug 3 — Wrong Personality Panel Highlights on Hover
**File:** `src/components/ScentPersonality.tsx`
**What's wrong:** In the "WHAT KIND OF TROUBLE ARE YOU?" section, when you hover over a personality panel, the **wrong panel** lights up (the one to its left). Hovering over the first panel ("THE SEDUCER") doesn't highlight anything at all.

### Bug 4 — Testimonials Layout Broken on Mobile
**File:** `src/components/Testimonials.tsx`
**What's wrong:** The testimonials section shows 3 columns on ALL screen sizes, including mobile. On small screens, the text is squished and unreadable. It should be 1 column on mobile and 3 columns on medium+ screens.

### Bug 5 — Missing React Key Props
**File:** `src/components/Products.tsx`
**What's wrong:** The product list renders without `key` props in the `.map()` call, causing a React console warning. Add proper unique keys.

---

## Part 2: UI Enhancements & Animations (20 Points)

Add polish to the existing site. You have creative freedom here — show us your design sense.

### 2.1 — Smooth Scroll Navigation
The header has navigation links (SHOP, OUR SCENTS, ABOUT) that currently don't do anything. Make them:
- Scroll smoothly to the relevant sections on the page
- Add `id` attributes to sections as needed
- **Bonus:** Add an active state indicator showing which section is currently in view

### 2.2 — Section Entrance Animations
Sections currently appear statically. Add entrance animations as they scroll into view:
- Fade-in, slide-up, or any animation you think fits the brand
- You can use CSS + Intersection Observer, or Framer Motion — your choice
- Keep animations subtle and tasteful (this is a luxury brand, not a circus)

### 2.3 — Loading States & Micro-interactions
- Add a page loading skeleton or splash screen
- Improve any hover transitions that feel abrupt
- Add button press effects (subtle scale on click)
- Any other micro-interactions you think add value

---

## Part 3: Product Detail Page — API Integration (35 Points)

Build a full product detail experience with data fetched from an API.

### Setup the API

A `data/products.json` file is provided with 6 products. Use `json-server` to serve it as a REST API:

```bash
# Install json-server
npm install -D json-server

# Run the mock API (in a separate terminal)
npx json-server data/products.json --port 3001
```

This gives you:
- `GET http://localhost:3001/products` — all products
- `GET http://localhost:3001/products/:id` — single product by ID (e.g., `after-dark`, `sinner`)

### Requirements

1. **Add React Router** — Install `react-router-dom` and set up routing:
   - `/` — existing homepage
   - `/products` — product listing page (grid of all products from API)
   - `/product/:id` — individual product detail page

2. **Product Listing Page** (`/products`)
   - Fetch all products from the API
   - Display them in a responsive grid
   - Each card links to the product detail page
   - Show a loading state while data is fetching
   - Show an error state if the API is down

3. **Product Detail Page** (`/product/:id`)
   - Fetch single product data by ID from the API
   - Display: product images, name, tagline, description, price with size selector, ingredients list, customer reviews
   - Handle loading and error states
   - Show a 404-style page for invalid product IDs
   - **Design this page yourself** — no Figma provided. Match the dark luxury aesthetic of the existing site. This is where we evaluate your creativity.

4. **Connect Existing Cards** — Update the homepage product cards so clicking them navigates to `/product/:id`

### Tips
- Use `useEffect` + `fetch` or `axios` for API calls (or create a custom hook)
- Note: 2 products (HOLY SMOKE, MIDNIGHT CONFESSION) have empty `images` and `reviews` arrays — handle these edge cases gracefully
- Keep your code organized — consider a `hooks/`, `services/`, or `utils/` folder

---

## Part 4: Mock Checkout with Razorpay (25 Points)

Build an "Add to Bag" flow and integrate Razorpay payment gateway in test mode.

### 4.1 — Cart State Management
- Use **React Context API** or **Zustand** to manage cart state globally
- Support: add to cart, remove from cart, update quantity, clear cart
- Cart state should persist across page navigation (via router)

### 4.2 — Cart UI
- Update the shopping bag icon in the Header to show the real cart count
- Build a cart page or slide-out drawer showing:
  - Product name, size, quantity, price per item
  - Quantity controls (+ / -)
  - Remove item button
  - Subtotal and total calculation
  - "Proceed to Checkout" button

### 4.3 — Checkout Page
- Shipping details form: Name, Email, Phone, Address, City, Pincode
- Form validation (all fields required, valid email, 10-digit phone)
- Order summary showing cart items and total
- "Pay Now" button that triggers Razorpay

### 4.4 — Razorpay Integration (Test Mode)
You'll need a free Razorpay account for test credentials:

1. Sign up at [https://dashboard.razorpay.com/signup](https://dashboard.razorpay.com/signup)
2. Get your **Test Key ID** from Settings > API Keys (starts with `rzp_test_`)
3. Add the Razorpay checkout script to your `index.html`:
   ```html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   ```
4. On "Pay Now", open the Razorpay payment modal with:
   - Amount (from cart total, in paise — multiply by 100)
   - Currency: INR
   - Your test key
   - Order name: "NO SAINT"
   - Prefilled customer details from the form
5. Handle the `handler` (success) and `modal.ondismiss` (cancelled) callbacks
6. Show an order confirmation page on successful payment
7. Show an error/retry screen on failure

**Note:** You do NOT need a backend. Mock the order creation — the frontend Razorpay integration is what we're evaluating.

**Test card for Razorpay test mode:**
- Card: 4111 1111 1111 1111
- Expiry: Any future date
- CVV: Any 3 digits

---

## Allowed Libraries

You may install and use these libraries:

| Library | Purpose |
|---------|---------|
| `react-router-dom` | Routing (required for Part 3 & 4) |
| `framer-motion` | Animations (optional, CSS-only is also fine) |
| `json-server` | Mock API server (required for Part 3) |
| `zustand` | State management (optional, Context API is also fine) |
| `axios` | HTTP requests (optional, `fetch` is also fine) |
| Razorpay `checkout.js` | Payment integration (via script tag) |

## NOT Allowed

- **Next.js** or any other framework (stick with Vite + React)
- **CSS frameworks** other than Tailwind (no Bootstrap, Material UI, Chakra UI, Ant Design)
- **jQuery**
- Wholesale AI-generated code — we review your commit history and will ask about your implementation choices in the interview

---

## Submission Checklist

- [ ] Push your code to a **public GitHub repository**
- [ ] Write **meaningful commit messages** that show your process (not one giant commit)
- [ ] Deploy on **Vercel** — add the live URL to your repo description
- [ ] Make sure the deployed version works (API calls will fail on Vercel since json-server is local — that's okay, we'll run it locally. Alternatively, you can deploy the JSON to a free service like [My JSON Server](https://my-json-server.typicode.com/) for a live API)
- [ ] Update this README with any additional setup instructions for your additions

---

## How You'll Be Evaluated

| Criteria | What We're Looking For |
|----------|----------------------|
| **Bug fixes** | Did you find and correctly fix all 5 bugs? |
| **UI/Animations** | Are the enhancements smooth, tasteful, and on-brand? |
| **Product page** | Is the design creative? Does it handle loading/errors? Is it responsive? |
| **Checkout flow** | Does the cart work? Is Razorpay integrated correctly? Is the UX intuitive? |
| **Code quality** | Clean components, proper state management, no console errors |
| **Git hygiene** | Meaningful commits showing your thought process |
| **Attention to detail** | Responsive design, edge cases, consistent styling |

---

## Questions?

If anything is unclear, email **hr@catchycornerstudio.com** — we'll respond within a few hours.

Good luck. Make it look good. Make it work. Make us want to hire you.

**— Team Catchy Corner Studio**
