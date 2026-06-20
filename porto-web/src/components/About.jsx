import React from "react";
import { site } from "../siteConfig.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  const { about } = site;

  return (
    <section
      id="about"
      className="pt-16 pb-section-gap bg-card-bg/40 backdrop-blur-sm relative border-y border-accent-silver/20 scroll-mt-20"
    >
      <div className="px-6 md:px-notebook-margin max-w-container-max mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Narrative side */}
            <div className="lg:col-span-7 space-y-10">
              <h2 className="font-display-script text-[52px] sm:text-[60px] text-primary leading-none">
                {about.heading}
              </h2>

              <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Skill chips */}
              <div className="space-y-4">
                <h4 className="font-label-caps text-label-caps text-primary/80 uppercase">
                  Keahlian &amp; Fokus
                </h4>
                <div className="flex flex-wrap gap-3">
                  {about.skills.map((s) => (
                    <span
                      key={s.label}
                      className="bg-sky-tint text-primary px-4 py-2 rounded-full font-label-caps text-[11px] border border-primary/20 flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[14px]">{s.icon}</span>
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Background card */}
            <div className="lg:col-span-5">
              <div className="bg-card-bg p-10 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-accent-silver/30 relative">
                {/* Binder ring decoration */}
                <div className="absolute -left-3 top-0 bottom-0 flex flex-col justify-around py-10 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-paper-bg border border-accent-silver/40 shadow-inner"></div>
                  <div className="w-6 h-6 rounded-full bg-paper-bg border border-accent-silver/40 shadow-inner"></div>
                  <div className="w-6 h-6 rounded-full bg-paper-bg border border-accent-silver/40 shadow-inner"></div>
                </div>

                <h4 className="font-headline-lg text-headline-lg text-primary mb-8 pb-4 border-b border-accent-silver/30">
                  {about.cardTitle}
                </h4>

                <ul className="space-y-6">
                  {about.facts.map((f) => (
                    <li key={f.label} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-accent-gold mt-1">{f.icon}</span>
                      <div>
                        <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                          {f.label}
                        </p>
                        <p className="font-body-md font-semibold text-primary">{f.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Clip decoration */}
                <div className="absolute -top-6 right-10 transform rotate-12 pointer-events-none">
                  <div className="w-8 h-20 bg-accent-silver/40 rounded-full border border-primary/50 shadow-sm flex items-end justify-center pb-2">
                    <div className="w-4 h-4 rounded-full bg-primary/80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
