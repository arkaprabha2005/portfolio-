import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <a
      href={project.link !== "#" ? project.link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="relative flex flex-col md:flex-row 
border border-white/10 rounded-3xl overflow-hidden
bg-white/[0.02]
shadow-[0_10px_40px_rgba(0,0,0,0.6)]
transition-all duration-500 
hover:-translate-y-2 
hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
hover:bg-white/[0.04]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >

        {/* 🔥 INNER LIGHT */}
<div className="absolute inset-0 rounded-3xl bg-white/[0.02] pointer-events-none" />
{/* 🔥 SPOTLIGHT */}
<div
  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
  style={{
    background: `radial-gradient(
  300px circle at ${pos?.x || 0}px ${pos?.y || 0}px,
  rgba(255,255,255,0.08),
  transparent 60%
)`,
  }}
/>

{/* 🔥 EDGE OUTLINE */}
<div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

          <p className="text-white/30 text-sm mb-3">
            {project.id}
          </p>

          <p className="text-white/40 text-sm mb-6">
            {project.subtitle}
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            {project.title}
          </h2>

          {/* TAGS */}
          <div className="flex gap-3 flex-wrap mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="border border-white/20 px-3 py-1 rounded-full text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* DETAILS */}
          <div className="flex gap-10 text-sm text-white/40">
            {project.details.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden">

          <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover transition duration-300"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    e.currentTarget.style.transform = `
      scale(1.03)
      translate(${(x - 0.5) * 12}px, ${(y - 0.5) * 12}px)
    `;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1) translate(0,0)";
  }}
/>
<div className="absolute inset-0 bg-black/30 pointer-events-none" />
          {/* ARROW */}
          <div className="absolute bottom-6 right-6 
          w-12 h-12 rounded-full 
          border border-white/20 
          flex items-center justify-center 
          text-white/70 
          bg-black/20 backdrop-blur-md
          group-hover:bg-white group-hover:text-black 
          transition">
            ↗
          </div>

        </div>

       

      </div>
    </a>
  );
}