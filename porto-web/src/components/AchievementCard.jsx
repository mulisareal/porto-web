import React from "react";

const CAT_ICON = {
  kti: "history_edu",
  kaligrafi: "brush",
  inovasi: "lightbulb",
  bisnis: "trending_up",
  akademik: "school",
  digital: "design_services",
  pramuka: "flag",
};

export default function AchievementCard({ a }) {
  const intl = a.level === "Internasional";
  const levelClass = intl
    ? "bg-accent-gold/20 text-accent-gold border border-accent-gold/40"
    : a.level === "Nasional"
      ? "bg-sky-tint text-secondary border border-transparent"
      : "bg-card-bg text-on-surface-variant border border-accent-silver/30";

  return (
    <div
      className={`bg-card-bg p-6 rounded-xl scrapbook-card border flex flex-col h-full ${intl ? "border-accent-gold/50" : "border-accent-silver/20"
        }`}
    >
      <div className="flex justify-end items-start mb-4">

        <span className={`font-label-caps text-[10px] px-3 py-1 rounded-full uppercase ${levelClass}`}>
          {a.level}
        </span>
      </div>

      <span className="font-label-caps text-[11px] text-accent-gold uppercase tracking-wider mb-1">
        {a.rank}
      </span>
      <h4 className="font-headline-lg text-[21px] leading-snug text-primary mb-1">{a.title}</h4>
      <p className="font-body-md text-[15px] text-on-surface-variant italic flex-grow">{a.org}</p>

      <div className="mt-5 pt-4 border-t border-accent-silver/20 flex justify-between items-end">
        <div>
          <p className="font-label-caps text-[9px] text-on-surface-variant/70 uppercase tracking-widest">
            Penyelenggara
          </p>
          <p className="font-body-md text-[14px] text-primary leading-tight">{a.org}</p>
        </div>
        <span className="font-body-md text-[18px] italic text-accent-gold">{a.year}</span>
      </div>
    </div>
  );
}
