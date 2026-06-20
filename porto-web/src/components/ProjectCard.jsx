import React from "react";

// Kartu proyek: gambar sebagai caption utama; deskripsi muncul saat hover.
export default function ProjectCard({ p }) {
  return (
    <div className="group bg-[#0e2046] rounded-xl overflow-hidden scrapbook-card border border-accent-silver/30 flex flex-col h-full">
      {/* Area gambar */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-sky-tint to-paper-bg flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary/50 text-5xl">{p.icon}</span>
          </div>
        )}

        {/* Overlay deskripsi saat hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
          <p className="font-body-md text-[16px] text-white leading-relaxed">{p.desc}</p>
          <span className="mt-4 font-label-caps text-[11px] text-accent-gold uppercase tracking-wider flex items-center gap-1">
            Detail Proyek
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>

        <span className="absolute top-3 right-3 font-label-caps text-[10px] bg-paper-bg/80 text-secondary px-2 py-1 rounded-md">
          {p.year}
        </span>
      </div>

      {/* Caption */}
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-label-caps text-[10px] bg-sky-tint text-secondary px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <h4 className="font-headline-lg text-[22px] text-primary leading-tight">{p.title}</h4>
        <p className="font-label-caps text-[10px] text-accent-gold uppercase mt-1">{p.role}</p>
      </div>
    </div>
  );
}
