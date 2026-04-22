import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";


const projects = [
  {
    id: "01",
    title: "POSHAN – Smart Agriculture Assistance Platform",
    subtitle: "SDIS Hackathon / 2025",
    tags: ["AGRICULTURE", "AI", "WEB APP"],
    details: ["Hackathon Project", "Real-time Assistance"],
    image: "/images/poshan-mockup.png",
    link: "https://github.com/arkaprabha2005/POSHAN_",
  },
  {
  id: "02",
  title: "Brahmaputra Board Web Platform",
  subtitle: "Government Project / 2025",
  tags: ["GOVERNMENT", "WEB", "FRONTEND"],
  details: ["Structured UI", "Data Display"],
  image: "/images/brahmaputra-board.png", // replace later with real preview
  link: "https://github.com/arkaprabha2005/Brahmaputra-Board",
},
{
  id: "03",
  title: "Portfolio Website",
  subtitle: "Personal Project / 2026",
  tags: ["REACT", "DESIGN", "ANIMATION"],
  details: ["Interactive UI", "Motion Design"],
  image: "/images/placeholder-3.jpg",
  link: "#",
},
{
  id: "04",
  title: "Chat Application",
  subtitle: "Java Project / 2025",
  tags: ["JAVA", "SOCKETS", "UI"],
  details: ["Client-Server", "Real-time Messaging"],
  image: "/images/placeholder-4.jpg",
  link: "#",
}
];

export default function Work() {
    const [active, setActive] = useState(0);
    useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const height = window.innerHeight;

    const section = document.getElementById("work");
const offsetTop = section.offsetTop;
const scrollInside = scrollY - offsetTop;

const index = Math.min(
  projects.length - 1,
  Math.max(0, Math.floor(scrollInside / (height * 0.5)))
);
    setActive(index);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section id="work" className="relative h-[270vh] bg-black text-white">

      

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-30 relative">
        {/* SECTION TITLE */}
      <p className="absolute top-16 left-6 md:left-16 text-white/30 text-sm tracking-[0.3em] transition-opacity duration-700 opacity-0 animate-fadeIn">
  SELECTED PROJECTS
</p>

<div className="fixed top-20 right-10 flex gap-3 z-50">
  {projects.map((_, i) => {
    const isVisible = i <= active;

    return (
      <div
        key={i}
        onClick={() => {
          const section = document.getElementById("work");
          const offsetTop = section.offsetTop;

          window.scrollTo({
            top: offsetTop + i * window.innerHeight,
            behavior: "smooth",
          });
        }}
        className={`w-12 h-12 flex items-center justify-center text-sm font-medium cursor-pointer
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          i === active
            ? "bg-green-500 text-black scale-110"
            : "bg-white/10 text-white/60"
        }`}
        style={{
          transform: isVisible
            ? "translateY(0px)"
            : "translateY(40px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {String(i + 1).padStart(2, "0")}
      </div>
    );
  })}
</div>
   
  <div className="relative w-full max-w-[1200px] mx-auto h-full">

    {projects.map((project, i) => (
  <div
    key={project.id}
    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${i === active 
      ? "opacity-100 z-20 translate-y-0 scale-100" 
      : i < active 
        ? "opacity-0 -translate-y-32 scale-95 pointer-events-none"
        : "opacity-0 translate-y-32 scale-95 pointer-events-none"
    }`}
  >

    <ProjectCard project={project} />

  </div>
))}

  </div>

</div>
    </section>
    
  );
}
