import React from "react";
import { Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ArtGallery from "../components/ArtGallery.jsx";

export default function KaryaPage() {
  const { karyaPage } = site;

  return (
    <div className="pt-32 pb-section-gap">
      <div className="max-w-container-max mx-auto px-6 md:px-notebook-margin">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display-script text-display-script text-accent-gold mb-1">
              {karyaPage.scriptOverline}
            </h2>
            <h1 className="font-headline-xl text-headline-xl text-primary uppercase tracking-wide">
              {karyaPage.heading}
            </h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto mt-4"></div>
          </div>
        </Reveal>

        {/* Proyek teknologi */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8">

            <h3 className="font-headline-lg text-headline-lg text-primary">{karyaPage.techHeading}</h3>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-20">
          {site.projects.map((p, i) => (
            <Reveal key={i} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Galeri seni */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8">

            <h3 className="font-headline-lg text-headline-lg text-primary">{karyaPage.artHeading}</h3>
          </div>
          <ArtGallery />
        </Reveal>

        {/* CTA kolaborasi */}
        <Reveal>
          <div className="mt-24 bg-sky-tint rounded-xl border border-primary/30 p-10 md:p-14 text-center">
            <h3 className="font-headline-xl text-headline-xl text-primary mb-3">{karyaPage.ctaTitle}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-8">
              {karyaPage.ctaText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={site.cvUrl}
                className="bg-accent-gold text-primary-inverse px-8 py-3 rounded-lg font-label-caps text-label-caps hover:bg-secondary transition-all flex items-center gap-2"
              >
                Unduh CV Lengkap
                <span className="material-symbols-outlined text-sm">download</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-label-caps text-label-caps hover:bg-primary/5 transition-all"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Link
            to="/#karya"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-accent-gold transition-all"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
