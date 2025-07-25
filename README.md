# 🛍️ Mini-Commerce

A clean, mobile-first Angular + Tailwind mini e-commerce demo built for modern browsers with:

- ✅ Product listing with JSON-based seeding
- ✅ Product detail pages with Add to Cart
- ✅ Shopping cart with quantity updates and remove
- ✅ Checkout flow with order summary
- ✅ Search filtering by name/description
- ✅ Cart persistence via localStorage
- ✅ Toast notifications (success, error, warning)
- ✅ Dark mode toggle with localStorage persistence
- ✅ Responsive, accessible, and animation-enhanced UI

---

## 📦 Tech Stack

- **Angular 19** (standalone components + routing)
- **Tailwind CSS** (utility-first, dark mode ready)
- **RxJS** (`BehaviorSubject`-based cart service)
- **ngx-toastr** (toast feedback)
- **SCSS** (global overrides + Toastr theming)
- **Netlify** (CI/CD + deployment)

---

## 🚀 Live Demo

🔗 [View Live App](https://stackblud-task.netlify.app/)

---

## 🧠 Features

- 📱 Mobile-first responsive grid layout
- 🌙 Dark mode toggle (saved in `localStorage`)
- 🔍 Real-time product search input
- 🧃 Toasts on cart/checkout actions
- ✨ Angular route & element animations
- 🛒 Persistent cart state across sessions

---

## 🎨 Design Approach

- **Layout**: Card-based grid with `max-w` breakpoints for clean centering
- **Colors**: Tailwind palette (purple primary, gray backgrounds, green success)
- **Responsiveness**: `sm`, `md`, `lg` breakpoints used for grid and buttons
- **Animations**: Fade-in and scale transitions for product grid and routing
- **Accessibility**: Focus outlines, screen-reader-friendly alt text, semantic tags

---

## 🛠️ Setup

```bash
npm install
ng serve
