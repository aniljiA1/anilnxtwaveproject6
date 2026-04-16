# 🐾 Pokémon Explorer App

A React-based web application that fetches and displays Pokémon data using the PokéAPI. The app implements lazy loading (pagination) and allows users to view detailed information about each Pokémon.

---

## Live Demo
Live: https://anilnxtwaveproject6.vercel.app

---

## 🚀 Features

* 📜 Fetch Pokémon list from API
* 🔄 Lazy loading (20 Pokémon per request)
* 🔍 Click on a Pokémon to view detailed information
* ⚡ Fast and responsive UI
* 🌐 API integration with PokéAPI

---

## 🛠️ Tech Stack

* React (Vite)
* React Router DOM
* Axios
* CSS / Basic Styling

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── PokemonCard.jsx
│   ├── Loader.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── PokemonDetails.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/aniljiA1/anilnxtwaveproject6.git
cd pokemon-app
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🔗 API Used

* https://pokeapi.co/

---

## 🧠 Approach

* Used offset-based pagination to implement lazy loading.
* Maintained state for Pokémon list and appended new data on each API call.
* Implemented dynamic routing to navigate between list and detail views.
* Separated concerns using components, pages, and services.

---

## ✨ Future Improvements

* Infinite scrolling (auto load on scroll)
* Search functionality
* Better UI with Tailwind CSS
* Loading skeletons
* Error handling

---

## 📌 Author

**Anil Kumar**

---


