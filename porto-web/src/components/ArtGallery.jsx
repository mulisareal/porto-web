import React from "react";
import { site } from "../siteConfig.js";

const ROT = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

// Galeri seni gaya polaroid; grayscale berubah warna saat hover.
export default function ArtGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {site.art.map((a, i) => (
        <figure
          key={i}
          className={`group bg-primary p-3 pb-10 rounded-sm shadow-[2px_6px_16px_rgba(0,0,0,0.5)] ${ROT[i % ROT.length]} hover:rotate-0 hover:scale-[1.03] transition-transform duration-300`}
        >
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-accent-silver/40 to-paper-bg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
            {a.image ? (
              <img src={a.image} alt={a.title} className="w-full h-full object-cover" style={a.pos ? { objectPosition: a.pos } : undefined} />
            ) : (
              <span className="material-symbols-outlined text-primary/40 text-5xl">{a.icon}</span>
            )}
          </div>
          <figcaption className="font-body-md italic text-[14px] text-center mt-3 text-primary-inverse">
            {a.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
