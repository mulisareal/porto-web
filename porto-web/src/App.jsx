import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PrestasiPage from "./pages/PrestasiPage.jsx";
import KaryaPage from "./pages/KaryaPage.jsx";

// Mengelola posisi scroll saat pindah halaman / klik anchor.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="paper-texture text-on-surface min-h-screen">
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestasi" element={<PrestasiPage />} />
          <Route path="/karya" element={<KaryaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
