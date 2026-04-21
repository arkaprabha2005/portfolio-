import React from "react";

export default function Ticker() {
  const items = ["FIGMA", "FLUTTER", "JAVA", "GIT", "DART"];

  return (
    <div className="relative w-full overflow-hidden border-t border-white/10 py-6">
      <div className="flex whitespace-nowrap gap-12 text-white/30 tracking-[0.4em] text-sm animate-scroll">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}