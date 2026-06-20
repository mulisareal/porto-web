import React from "react";
import { site } from "../siteConfig.js";
import Reveal from "./Reveal.jsx";

export default function Pengalaman() {
  return (
    <section
      id="pengalaman"
      className="max-w-container-max mx-auto px-6 md:px-notebook-margin pt-16 pb-section-gap relative scroll-mt-20"
    >
      {/* Heading */}
      <Reveal>
        <div className="mb-16">
          <h2 className="font-display-script text-display-script text-accent-gold mb-2">My Journey</h2>
          <h3 className="font-headline-xl text-headline-xl text-primary flex items-center gap-4">
            Professional Experience

          </h3>
        </div>
      </Reveal>

      <div className="relative">
        {/* Garis vertikal timeline */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px timeline-line"></div>

        <div className="space-y-12">
          {site.experience.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  const left = item.side === "left";

  const card = (
    <Reveal>
      <div className={`bg-card-bg p-6 md:p-8 rounded-xl scrapbook-card border border-accent-silver/20 relative ${left ? "md:text-right" : ""}`}>
        <div className="absolute -top-3 -right-3 washi-tape w-16 h-6 z-10 hidden md:block"></div>
        <span className="font-label-caps text-label-caps text-secondary block mb-2">{item.date}</span>
        <h4 className="font-headline-lg text-headline-lg text-primary mb-1">{item.title}</h4>
        <p className="font-body-md text-[19px] text-on-surface-variant italic mb-4">{item.org}</p>
        <ul className="font-body-md text-body-md text-on-surface space-y-2 text-left">
          {item.points.map((p, idx) => (
            <li key={idx} className={`flex items-start gap-2 ${left ? "md:justify-end" : ""}`}>
              {left ? (
                <>
                  <span className="md:order-1">{p}</span>
                  <span className="material-symbols-outlined text-accent-gold scale-75 mt-1 shrink-0 md:order-2">
                    {item.bulletIcon}
                  </span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-accent-gold scale-75 mt-1 shrink-0">
                    {item.bulletIcon}
                  </span>
                  <span>{p}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  const node = (
    <div className={`z-10 w-8 h-8 rounded-full ${item.node.bg} border-4 border-paper-bg flex items-center justify-center shrink-0 mb-4 md:mb-0`}>
      <span
        className={`material-symbols-outlined ${item.node.fg} text-sm`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {item.node.icon}
      </span>
    </div>
  );

  return (
    <div className="relative flex flex-col md:flex-row items-center group">
      {/* Kolom kiri */}
      <div className={`flex-1 w-full md:pr-12 order-2 md:order-1 ${left ? "" : "hidden md:block"}`}>
        {left && card}
      </div>
      {/* Node tengah */}
      <div className="order-1 md:order-2">{node}</div>
      {/* Kolom kanan */}
      <div className={`flex-1 w-full md:pl-12 order-3 ${left ? "hidden md:block" : ""}`}>
        {!left && card}
      </div>
    </div>
  );
}
