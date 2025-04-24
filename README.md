# 🧑‍💻 Anycomp Marketplace Frontend

This is the React frontend for the **Anycomp Marketplace** project. It connects to the Spring Boot backend and provides a simple UI to manage buyers, sellers, items, and purchases.

👉 **Live Backend Repo:** [anycomp-marketplace (Spring Boot)](https://github.com/Mohafadhil99/anycomp-marketplace)  
👉 **Frontend GitHub Repo:** [anycomp-frontend (React)](https://github.com/Mohafadhil99/anycomp-frontend)

---

## 🛠️ Tech Stack
- React
- React Router DOM
- Fetch API
- Bootstrap (optional styling)

---

## 📦 Features
- Add new **Buyers** and **Sellers** via form
- View all **Items** from backend
- Create a **Purchase** by selecting buyer, item, and quantity
- View list of all **Purchases**
- Navigation bar to access all pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm installed (download from [https://nodejs.org](https://nodejs.org))
- Backend server running on `http://localhost:8080`

### Install Dependencies
```bash
npm install
```

### Start the App
```bash
npm start
```
Visit: `http://localhost:3000`

---

## 📂 Project Structure
```
src/
 ├─ App.js          # Routing & Navigation
 ├─ pages/
     ├─ Home.js
     ├─ Items.js
     ├─ AddBuyer.js
     ├─ AddSeller.js
     ├─ Purchase.js
     └─ ViewPurchases.js
```

---

## 🔗 Backend API Endpoints Used
- `GET /items`
- `GET /buyers`
- `POST /buyers`
- `GET /sellers`
- `POST /sellers`
- `POST /purchase`
- `GET /purchases`

---

## ✨ Credits
**Developed by:** Mohammad Fadhil Bin Rosman  
**Certification:** Oracle Java Foundations Certified (1Z0-811)

---

## 🌍 Deployment Help
Want to deploy this site live? You can use:
- [Vercel](https://vercel.com/) – easiest React deploy
- [GitHub Pages](https://pages.github.com/) – static hosting

Let me know if you want help deploying this live!
