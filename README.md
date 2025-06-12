# 📱 Phone Comparison App

An interactive, responsive web interface built with **React** and **Bootstrap** that allows users to compare smartphones side-by-side. It includes modern UI elements, light/dark mode, localStorage persistence, and feature highlighting to enhance user experience.

---

## 🚀 Github Repo

https://github.com/Kunal1101/phone-comparison

---

## 🚀 Live Demo

[🔗 View on Vercel](https://phone-comparison-iota.vercel.app/)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone git@github.com:Kunal1101/phone-comparison.git
cd phone-comparison
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

The app will open at `http://localhost:5173/`

---

## 📦 Build

```bash
npm run build
```

---

## ✨ Features

- 📱 Display a list of **8 modern smartphones**
- 🔍 **Search filter** to quickly find devices
- 🔁 **Add to Compare** button with toggle functionality
- 📊 Side-by-side **comparison table** for up to 3 devices
- 🎯 **Visual highlighting** of differences in comparison table
- 💾 **LocalStorage persistence** for comparison items
- 🌓 **Light/Dark mode toggle**
- 📱 Fully **responsive** layout for mobile and desktop

---

## 📂 Folder Structure

```
src/
├── assets/images/        # Local phone images
├── components/           # Header, ProductList, ComparisonTable,
├── data/                 # Product Data
├── App.jsx               # Main component
├── App.css               # Styling
└── index.js
```

---

.

## 🧠 Assumptions

- Static product data is used (no backend/API).
- Images are stored locally and mapped via `imageMap.js`.
- Max 3 products can be compared at a time.
- Comparison highlights only for `Display`, `Camera`, and `Storage`.

---
