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
];

export default function Work() {
  return (
    <section id="work" className="w-screen bg-black text-white px-6 md:px-16 py-20">

      {/* SECTION TITLE */}
      <p className="text-white/30 text-sm tracking-widest mb-10">
        SELECTED PROJECTS
      </p>

      <div className="flex flex-col gap-12">

        {projects.map((project) => (
  <a
    key={project.id}
    href={project.link !== "#" ? project.link : undefined}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <div
      className="flex flex-col md:flex-row 
      border border-white/10 rounded-3xl overflow-hidden
      transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03]"
    >

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
          className="w-full h-full object-cover 
          scale-[1.75] group-hover:scale-[2.50] 
          transition duration-700 ease-out"
        />

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
))}
      </div>
    </section>
    
  );
}
