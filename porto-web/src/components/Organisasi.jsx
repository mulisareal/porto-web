import React from "react";
import { site } from "../siteConfig.js";
import Reveal from "./Reveal.jsx";

export default function Organisasi() {
  return (
    <section id="organisasi" className="bg-card-bg pt-16 pb-section-gap relative overflow-hidden scroll-mt-20">
      {/* Doily dekoratif berputar */}
      <div className="absolute -top-24 -right-24 opacity-10 pointer-events-none">
        <div className="w-96 h-96 border-4 border-dashed border-primary rounded-full animate-[spin_60s_linear_infinite]"></div>
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-notebook-margin relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display-script text-display-script text-accent-gold">Community &amp;</h2>
            <h3 className="font-headline-xl text-headline-xl text-primary">Organizational Roles</h3>
            <div className="w-24 h-1 bg-accent-gold mx-auto mt-4"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {site.organizations.map((o, i) => (
            <Reveal key={i} className="h-full">
              <div className="bg-[#0e2046] h-full p-8 rounded-xl scrapbook-card border border-accent-silver/30 flex flex-col items-center text-center">

                <h4 className="font-headline-lg text-headline-lg text-primary mb-1">{o.name}</h4>
                <p className="font-label-caps text-label-caps text-accent-gold mb-4 uppercase">{o.role}</p>
                <p className="font-body-md text-body-md text-on-surface-variant">{o.desc}</p>
                <div className="mt-auto pt-6 w-full flex justify-between items-center text-on-surface-variant/70 border-t border-accent-silver/10">
                  <span className="text-xs font-label-caps">{o.period}</span>

                </div>
              </div>
            </Reveal>
          ))}

          {/* Kartu ajakan kolaborasi */}
          <Reveal className="h-full">
            <div className="bg-sky-tint h-full p-8 rounded-xl scrapbook-card border border-primary/40 flex flex-col items-center justify-center text-center group">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4 group-hover:scale-110 transition-transform">
                handshake
              </span>
              <h4 className="font-headline-lg text-headline-lg text-primary mb-2">{site.orgCta.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{site.orgCta.text}</p>
              <a
                href={`mailto:${site.email}`}
                className="px-8 py-3 bg-accent-gold text-primary-inverse font-label-caps text-label-caps rounded-lg hover:bg-secondary transition-all"
              >
                {site.orgCta.button}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
