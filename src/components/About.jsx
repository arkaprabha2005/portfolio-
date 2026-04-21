

export default function About() {
  return (
    <section id="about" className="w-screen px-6 md:px-16 py-24 bg-black text-white border-t border-white/10">

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE — STORY */}
        <div>

          <h2 className="story text-white/30 text-sm tracking-widest mb-8 flex flex-wrap">
  {"MY STORY".split("").map((char, i) => (
    <span key={i} className="char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>

          <div className="space-y-6 text-white/70 leading-relaxed text-[15px]">

            <p>
              I'm a developer from India focused on building clean, interactive
              web experiences. I enjoy combining design and code to create
              interfaces that feel fast, intuitive, and visually strong.
            </p>

            <p>
              My work revolves around frontend development, UI systems, and
              crafting smooth user interactions. I like exploring how motion
              and structure can improve usability.
            </p>

            <p>
              I’ve worked on projects ranging from hackathon builds to personal
              applications, always aiming to improve performance, design clarity,
              and overall experience.
            </p>

            <p>
              I’m constantly learning, experimenting, and refining how I build—
              whether it's through new technologies or better design thinking.
            </p>
            <a
  href="/resume/arka-resume.pdf"
  download="Arkaprabha_Pal_resume.pdf"
  className="inline-flex items-center gap-2 mt-10 
  border border-white/20 px-5 py-2 rounded-full 
  text-sm text-white/70 
  hover:bg-white hover:text-black 
  transition"
>
  DOWNLOAD Resume ↓
</a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">

          {/* SKILLS */}
          <div>
            <p className="text-white/30 text-xs tracking-widest mb-4">
              SKILLS
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              {["React", "JavaScript", "Tailwind", "Figma", "Node.js"].map((s) => (
                <span
                  key={s}
                  className="border border-white/20 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* PROJECT TYPES */}
          <div>
            <p className="text-white/30 text-xs tracking-widest mb-4">
              PROJECTS
            </p>

            <div className="space-y-3 text-white/70 text-sm">
              <p>• Full-stack web applications</p>
              <p>• Hackathon projects (AI + real-world problems)</p>
              <p>• UI/UX focused frontend builds</p>
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <p className="text-white/30 text-xs tracking-widest mb-4">
              INTERESTS
            </p>

            <div className="space-y-3 text-white/70 text-sm">
              <p>• Interaction design & motion</p>
              <p>• Clean UI systems</p>
              <p>• Performance-focused web apps</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}