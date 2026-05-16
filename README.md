# Mehak Chawla | Editorial Makeup Portfolio

A high-end, editorial-focused portfolio website for **Mehak Chawla**, a professional makeup artist. This project emphasizes visual excellence, technical precision, and a seamless user experience through a modern "magazine-style" design.

## ✨ Key Features

- **Editorial Aesthetic**: A premium design system using curated typography (Aboreto), refined spacing, and a minimalist color palette.
- **Dynamic Portfolio Sections**: Seven distinct categories (Bridal, Editorial, SFX, etc.) with a consistent 8-image preview and "Load More" functionality.
- **High-Res "Macro" Lightbox**: An immersive, full-screen viewing experience with a modern glassy backdrop, allowing clients to appreciate technical details.
- **Deep-Dive Collection Pages**: Dedicated pages for each look type, featuring extensive 24-image grids in a professional 3:4 aspect ratio.
- **Real-time Google Sheets Integration**: A custom-built contact form that sends enquiries directly to a Google Spreadsheet in real-time using Google Apps Script.
- **Fluid Navigation**: Responsive 4+3 navigation grid with global smooth-scrolling and auto-scroll-to-top on page transitions.

## 🚀 Tech Stack

- **Core**: React.js, Vite
- **Routing**: React Router DOM
- **Backend**: Google Apps Script (Serverless)
- **Styling**: Vanilla CSS (Custom Design System)
- **Deployment**: Optimized for Vercel/Netlify

## 🛠️ Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arpitsehal/Mehak_portfolio.git
   cd Mehak_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📊 Google Sheets Integration Setup

To connect the contact form to your own sheet:
1. Create a Google Sheet with headers: `Timestamp`, `First Name`, `Last Name`, `Email`, `Mobile`, `Subject`, `Message`.
2. Go to **Extensions > Apps Script** and paste the provided integration script.
3. Deploy as a **Web App** with "Access: Anyone".
4. Update the `scriptURL` in `App.jsx` with your new deployment URL.

---

*Designed and Developed for Mehak Chawla.*
