import ProjectCard from "./ProjectCard";

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
  <ProjectCard key={project.id} project={project} />
))}
      </div>
    </section>
    
  );
}
