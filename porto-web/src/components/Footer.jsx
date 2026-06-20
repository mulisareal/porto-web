import React from "react";
import { site } from "../siteConfig.js";

export default function Footer() {
  return (
    <footer className="bg-card-bg w-full border-t border-accent-silver/30">
      <div className="flex flex-col md:flex-row justify-between items-center py-gutter px-6 md:px-notebook-margin max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
          <p className="font-display-script text-display-script text-primary leading-none">{site.brand}</p>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-90">{site.footerNote}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`font-body-md text-body-md text-on-surface-variant hover:text-accent-gold underline decoration-accent-gold/30 transition-all ${s.bold ? "font-bold" : ""
                }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
