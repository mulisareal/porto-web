import React from "react";
import { Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function KaryaPreview() {
  const featured = site.projects.slice(0, 3);

  return (
    <section id="karya" className="bg-card-bg pt-16 pb-section-gap scroll-mt-20">
      <div className="max-w-container-max mx-auto px-6 md:px-notebook-margin">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display-script text-display-script text-accent-gold mb-1">Portfolio</h2>
            <h3 className="font-headline-xl text-headline-xl text-primary">Karya & Proyek</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl mx-auto">
              Perpaduan teknologi, riset, dan seni. Arahkan kursor ke kartu untuk melihat detail.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {featured.map((p, i) => (
            <Reveal key={i} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/karya"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border border-accent-gold/60 px-8 py-3 rounded-lg hover:bg-accent-gold hover:text-primary-inverse transition-all"
          >
            Lihat Semua Karya
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
