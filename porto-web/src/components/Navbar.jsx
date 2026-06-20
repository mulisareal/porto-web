import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../siteConfig.js";

// Tiap item: type "page" (halaman terpisah) atau "section" (anchor di beranda)
// sectionId = id elemen DOM yang diobservasi untuk section links
const NAV = [
  { label: "Tentang Saya", to: "/#about", type: "section", sectionId: "about" },
  { label: "Prestasi", to: "/#prestasi", type: "section", sectionId: "prestasi" },
  { label: "Karya", to: "/#karya", type: "section", sectionId: "karya" },
  { label: "Pengalaman", to: "/#pengalaman", type: "section", sectionId: "pengalaman" },
  { label: "Organisasi", to: "/#organisasi", type: "section", sectionId: "organisasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const observerRef = useRef(null);
  const scrollLockRef = useRef(false);   // kunci agar observer tidak ubah active saat scroll
  const scrollLockTimer = useRef(null);

  // Deteksi section yang terlihat di layar menggunakan IntersectionObserver
  useEffect(() => {
    // Hanya observe saat di halaman beranda
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = NAV.filter((n) => n.type === "section").map((n) => n.sectionId);
    const visibleSections = new Map();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Jika sedang dalam scroll lock (user baru klik menu), abaikan update
        if (scrollLockRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Pilih section dengan visibilitas tertinggi
        if (visibleSections.size > 0) {
          let best = "";
          let bestRatio = 0;
          visibleSections.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = id;
            }
          });
          setActiveSection(best);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px 0px 0px" }
    );

    // Observe semua section elements
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
    };
  }, [location.pathname]);

  // Saat klik section link: kunci activeSection ke tujuan selama smooth scroll
  const handleSectionClick = useCallback((sectionId, extraOnClick) => {
    return (e) => {
      // Kunci active ke section yang diklik
      scrollLockRef.current = true;
      setActiveSection(sectionId);

      // Lepas kunci setelah 1.2 detik (cukup untuk smooth scroll selesai)
      if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
      scrollLockTimer.current = setTimeout(() => {
        scrollLockRef.current = false;
      }, 1200);

      if (extraOnClick) extraOnClick(e);
    };
  }, []);

  const isOnHome = location.pathname === "/";

  const linkClass = (isActive) =>
    `font-label-caps text-label-caps transition-all ${
      isActive
        ? "text-primary border-b-2 border-accent-gold pb-1"
        : "text-on-surface-variant hover:text-accent-gold"
    }`;

  const renderLink = (n, onClick) => {
    if (n.type === "page") {
      return (
        <NavLink
          key={n.to}
          to={n.to}
          onClick={onClick}
          className={({ isActive }) => linkClass(isActive)}
        >
          {n.label}
        </NavLink>
      );
    }

    // Section link: aktif jika di halaman Home dan section sedang terlihat
    const isSectionActive = isOnHome && activeSection === n.sectionId;
    return (
      <Link
        key={n.to}
        to={n.to}
        onClick={handleSectionClick(n.sectionId, onClick)}
        className={linkClass(isSectionActive)}
      >
        {n.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#02132e]/85 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-6 md:px-notebook-margin h-20 max-w-container-max mx-auto">
        <Link to="/" className="font-display-script text-display-script text-primary leading-none flex items-center translate-y-2">
          {site.brand}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((n) => renderLink(n))}
          <a
            href={site.cvUrl}
            className="bg-primary text-primary-inverse px-6 py-2 rounded-lg font-label-caps text-label-caps hover:bg-secondary transition-all"
          >
            Download CV
          </a>
        </div>

        <button className="md:hidden text-primary" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#02132e]/95 backdrop-blur-md border-t border-outline-variant/30 px-6 py-4 flex flex-col gap-4">
          {NAV.map((n) => renderLink(n, () => setOpen(false)))}
          <a
            href={site.cvUrl}
            className="bg-primary text-primary-inverse px-6 py-2 rounded-lg font-label-caps text-label-caps text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
