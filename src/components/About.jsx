import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    const lines = document.querySelectorAll(".story-line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    lines.forEach((line) => observer.observe(line));

    return () => lines.forEach((line) => observer.unobserve(line));
  }, []);

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

          {/* 🔥 FIXED STRUCTURE */}
          <div className="relative pl-6">

            {/* LEFT LINE */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-white/10" />

            {/* TEXT */}
            <div className="space-y-6 text-white/60 leading-relaxed text-[15px]">

              <p
  className="story-line"
  style={{ transitionDelay: "0ms" }}
>
                I'm a developer from India focused on building clean, interactive
                web experiences. I enjoy combining design and code to create
                interfaces that feel fast, intuitive, and visually strong.
              </p>

              <p
  className="story-line"
  style={{ transitionDelay: "120ms" }}
>
                My work revolves around frontend development, UI systems, and
                crafting smooth user interactions. I like exploring how motion
                and structure can improve usability.
              </p>

              <p
  className="story-line"
  style={{ transitionDelay: "240ms" }}
>
                I’ve worked on projects ranging from hackathon builds to personal
                applications, always aiming to improve performance, design clarity,
                and overall experience.
              </p>

              <p
  className="story-line"
  style={{ transitionDelay: "360ms" }}
>
                I’m constantly learning, experimenting, and refining how I build—
                whether it's through new technologies or better design thinking.
              </p>

              <a
                href="/resume/arka-resume.pdf"
                download="Arkaprabha_Pal_resume.pdf"
                className="inline-flex items-center gap-2 mt-10 
                border border-white/20 px-5 py-2 rounded-full 
                text-sm text-white/60 
                hover:bg-white hover:text-black 
                transition"
              >
                DOWNLOAD Resume ↓
              </a>

            </div>

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