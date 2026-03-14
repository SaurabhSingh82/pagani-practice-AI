# Pagani Zonda R Showcase

A stunning, full-stack web application dedicated to the Pagani Zonda R. It features a modern, Awwwards-style design with cinematic scroll animations, a 3D car configurator, and a beautifully crafted frontend architecture.

> **Note: This complete project was generated and developed using Advanced Agentic AI as a practice exercise.**

## 🏎️ Features
- **Scrollytelling Experience**: A premium landing page featuring a 240-frame background image sequence controlled entirely by scroll position.
- **Interactive 3D Configurator**: Built with `@react-three/fiber` and `@react-three/drei`, allowing users to customize luxury paint colors on a 3D model in real-time.
- **Cinematic Routing**: Smooth layout wipe transitions using `react-router-dom` and `framer-motion`'s AnimatePresence.
- **Internationalization**: Full i18n support with togglable dictionaries (English & Italian) using `react-i18next`.
- **Full-Stack API**: Node.js & Express server with MongoDB integration (featuring an in-memory fallback) and a Nodemailer endpoint for direct email contact from the frontend.
- **Awwwards-Wining UI**: Custom magnetic cursor, glassmorphism UI overlay elements, and highly bespoke typography composed with Tailwind CSS v4.

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion, HTML5 Canvas, React Three Fiber
- **Backend**: Node.js, Express, Mongoose (MongoDB), Nodemailer

## 🚀 Running Locally

1. **Install Dependencies**
   ```bash
   # Install Frontend Packages
   cd pagani-zonda
   npm install
   
   # Install Backend Packages
   cd ../server
   npm install
   ```

2. **Start Backend Server**
   ```bash
   cd server
   node server.js
   ```
   *The API runs on port 5000.*

3. **Start Frontend Client**
   ```bash
   cd pagani-zonda
   npm run dev
   ```
   *The React app will launch, typically accessible on port 5173.*

## 📜 Notice
This codebase was created purely for educational and practice purposes to explore AI-driven software engineering limits. All Pagani trademarks and imagery theoretically belong to Pagani Automobili S.p.A.
