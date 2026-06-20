import React from "react";
import { Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import Reveal from "./Reveal.jsx";
import AchievementCard from "./AchievementCard.jsx";

export default function PrestasiPreview() {
  // Ambil prestasi unggulan berdasarkan daftar judul di siteConfig
  const featured = site.featuredAchievements
    .map((t) => site.achievements.find((a) => a.title === t))
    .filter(Boolean);

  const intlCount = site.achievements.filter((a) => a.level === "Internasional").length;

  return (
    <section
      id="prestasi"
      className="max-w-container-max mx-auto px-6 md:px-notebook-margin pt-16 pb-section-gap scroll-mt-20"
    >
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display-script text-display-script text-accent-gold mb-1">Achievements</h2>
            <h3 className="font-headline-xl text-headline-xl text-primary">Prestasi & Penghargaan</h3>
          </div>
          <div className="flex items-baseline gap-3 md:text-right">
            <span className="font-headline-xl text-[56px] leading-none text-accent-gold">
              {site.achievements.length}+
            </span>
            <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide leading-snug">
              Penghargaan Nasional
              <br />&amp; Internasional
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {featured.map((a, i) => (
          <Reveal key={i} className="h-full">
            <AchievementCard a={a} />
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/prestasi"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border border-accent-gold/60 px-8 py-3 rounded-lg hover:bg-accent-gold hover:text-primary-inverse transition-all"
        >
          Lihat Semua Penghargaan
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
