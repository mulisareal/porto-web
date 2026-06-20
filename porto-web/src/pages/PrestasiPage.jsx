import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import Reveal from "../components/Reveal.jsx";
import AchievementCard from "../components/AchievementCard.jsx";

export default function PrestasiPage() {
  const [active, setActive] = useState("all");
  const { prestasiPage } = site;

  const items = useMemo(
    () => (active === "all" ? site.achievements : site.achievements.filter((a) => a.cat === active)),
    [active]
  );
  const intlCount = site.achievements.filter((a) => a.level === "Internasional").length;

  return (
    <section className="max-w-container-max mx-auto px-6 md:px-notebook-margin pt-32 pb-section-gap">
      {/* Header */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-label-caps text-label-caps text-accent-gold uppercase tracking-[0.2em] mb-2">
              {prestasiPage.overline}
            </p>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-3">{prestasiPage.heading}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant italic">{prestasiPage.subtitle}</p>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <span className="font-headline-xl text-[64px] leading-none text-accent-gold">
              {site.achievements.length}+
            </span>
            <span className="font-label-caps text-[11px] text-on-surface-variant uppercase leading-snug">
              Penghargaan
              <br />Nasional &amp; Int.
            </span>
          </div>
        </div>
      </Reveal>

      {/* Filter */}
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-10">
          {site.achievementCategories.map((c) => {
            const count =
              c.key === "all"
                ? site.achievements.length
                : site.achievements.filter((a) => a.cat === c.key).length;
            const on = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`font-label-caps text-[11px] px-4 py-2 rounded-full border transition-all ${
                  on
                    ? "bg-accent-gold text-primary-inverse border-accent-gold"
                    : "bg-card-bg text-on-surface-variant border-accent-silver/30 hover:border-accent-gold/60 hover:text-primary"
                }`}
              >
                {c.label} ({count})
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid semua prestasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {items.map((a, i) => (
          <AchievementCard key={i} a={a} />
        ))}
      </div>

      <div className="mt-12">
        <Link
          to="/#prestasi"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-accent-gold transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
