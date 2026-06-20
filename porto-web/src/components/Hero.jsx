import React from "react";
import { site } from "../siteConfig.js";

export default function Hero() {
  const { hero, images } = site;

  return (
    <section
      id="top"
      className="relative flex items-center pt-32 pb-section-gap px-6 md:px-notebook-margin max-w-container-max mx-auto overflow-hidden"
    >
      {/* Decorative doily circle */}
      <div className="absolute top-40 right-10 w-64 h-64 border border-accent-silver/20 rounded-full doily-pattern pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Text column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <h2 className="font-label-caps text-label-caps text-accent-gold tracking-[0.2em] uppercase">
              {hero.overline}
            </h2>
            <h1 className="font-display-script text-[64px] sm:text-[84px] text-primary leading-tight">
              {hero.name}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg italic">
              {hero.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={site.cvUrl}
              className="bg-primary text-primary-inverse px-8 py-4 rounded-lg font-label-caps text-label-caps flex items-center gap-2 group hover:shadow-lg transition-all"
            >
              Unduh CV
              <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">
                download
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary/5 transition-all"
            >
              Kontak
            </a>
          </div>

        </div>

        {/* Visual column (polaroid stack) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          {/* Main polaroid */}
          <div className="relative z-20 animate-float max-w-xs mx-auto lg:max-w-sm">
            <div className="bg-card-bg p-3 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-sm rotate-[-2deg] relative border border-outline-variant/30">
              <div className="w-full aspect-[3/4] bg-paper-bg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale-[20%]"
                  src={images.main}
                  alt="Foto utama Mulisa Kusuma Wardani"
                />
                <div className="absolute -top-4 -left-8 w-24 h-8 washi-tape rotate-[-15deg] z-30"></div>
              </div>
              <p className="font-body-md italic text-center mt-4 text-primary/80 text-sm">{hero.caption}</p>
            </div>
          </div>

          {/* Secondary polaroid */}
          <div className="absolute -bottom-4 -right-2 z-30 rotate-[6deg] scale-[0.7] hidden sm:block">
            <div className="bg-card-bg p-2 pb-8 shadow-[0_8px_25px_rgba(0,0,0,0.4)] rounded-sm relative border border-outline-variant/30">
              <div className="w-40 h-40 bg-paper-bg overflow-hidden">
                <img className="w-full h-full object-cover" src={images.art} alt="Karya seni / kaligrafi" />
                <div className="absolute top-0 right-0 w-16 h-6 washi-tape opacity-60 rotate-[25deg]"></div>
              </div>
            </div>
          </div>

          {/* Tertiary polaroid */}
          <div className="absolute -top-8 -left-6 z-10 rotate-[-8deg] scale-[0.7] hidden sm:block">
            <div className="bg-card-bg p-2 pb-8 shadow-[0_5px_15px_rgba(0,0,0,0.3)] rounded-sm border border-outline-variant/30">
              <div className="w-32 h-32 bg-paper-bg overflow-hidden">
                <img className="w-full h-full object-cover opacity-80" src={images.tech} alt="Riset / teknologi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
