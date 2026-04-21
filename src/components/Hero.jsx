import { useEffect, useRef, useState } from "react";
import Ticker from "./Ticker";

export default function Hero() {

  // ---------------- STATE ----------------
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // ---------------- CUSTOM SMOOTH SCROLL ----------------
  const smoothScroll = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    setActive(id);

    const start = window.scrollY;
    const end = target.offsetTop - 80;
    const duration = 900;

    let startTime = null;

    const ease = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = ease(progress);

      window.scrollTo(0, start + (end - start) * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // ---------------- SCROLL TRACK ----------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ["home", "work", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------- UNDERLINE (SMOOTH TRANSFORM) ----------------
  const containerRef = useRef(null);
  const itemRefs = {
    work: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const [underline, setUnderline] = useState({ x: 0, width: 0 });

  useEffect(() => {
    const el = itemRefs[active]?.current;
    const container = containerRef.current;

    if (el && container) {
      const elRect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      setUnderline({
        x: elRect.left - parentRect.left,
        width: elRect.width,
      });
    }
  }, [active]);

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <div
        className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        flex items-center text-[11px] tracking-[0.28em]
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          scrolled
            ? "bg-white text-black backdrop-blur-xl border border-black/10 rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] w-fit"
            : "w-[95%] max-w-[1600px] px-12 py-6 text-white justify-between"
        }
      `}
      >
        {!scrolled && <div></div>}

        {/* NAV ITEMS */}
        {/* NAV ITEMS */}
<div ref={containerRef} className="relative flex gap-8 items-center">

  <span
    ref={itemRefs.work}
    onClick={() => smoothScroll("work")}
    className={`cursor-pointer hover:opacity-70 ${
      active === "work" ? "text-green-500" : ""
    }`}
  >
    WORK
  </span>

  <span
    ref={itemRefs.about}
    onClick={() => smoothScroll("about")}
    className={`cursor-pointer hover:opacity-70 ${
      active === "about" ? "text-green-500" : ""
    }`}
  >
    ABOUT
  </span>

  <span
    ref={itemRefs.contact}
    onClick={() => smoothScroll("contact")}
    className={`cursor-pointer hover:opacity-70 ${
      active === "contact" ? "text-green-500" : ""
    }`}
  >
    CONTACT
  </span>

  {/* UNDERLINE */}
  <span
    className="absolute bottom-[-4px] h-[1px] bg-current origin-left 
    transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    style={{
      transform: `translateX(${underline.x}px) scaleX(${underline.width})`,
    }}
  />
</div>
      </div>

      {/* ---------------- HERO ---------------- */}
      <section id="home" className="w-screen h-screen bg-black">

        <div className="w-full h-full 
        bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.18),transparent_60%),linear-gradient(to_bottom,#06110b,#020303_70%)] 
        flex items-center justify-center">

          <div className="w-[95%] h-[92%] max-w-[1600px] rounded-[28px] 
          bg-[#050505] border border-white/5
          shadow-[0_80px_200px_rgba(0,0,0,0.8),0_0_120px_rgba(34,197,94,0.08)] 
          px-12 py-12 md:px-20 md:py-16 
          flex flex-col justify-between relative overflow-hidden"
          >

          {/* HERO VIDEO BACKGROUND */}
<video 
  autoPlay
  loop
  muted
  playsInline
  ref={(video) => {
    if (video) video.playbackRate = 0.7; // 🔥 speed control
  }}
  className="absolute inset-0 w-full h-full object-cover object-[60%_40%] opacity-100 blur-[3px]"
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/80"></div>  

            <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_25%_30%,rgba(34,197,94,0.15),transparent_40%)] pointer-events-none" />

           <div className="relative z-10 grid md:grid-cols-2 gap-16 items-end h-full">

              {/* LEFT */}
              <div>
                <p className="text-[11px] tracking-[0.4em] text-white/30 mb-8">
                  SOFTWARE DEVELOPER
                </p>

                <h1 className="text-[48px] sm:text-[72px] md:text-[110px] lg:text-[150px] leading-[0.9] font-black tracking-tight">
                  Arkaprabha
                  <br />
                  <span className="text-white/70">Pal</span>
                </h1>

                <p className="mt-8 text-[15px] text-white/50 max-w-[520px] leading-relaxed">
                  India based developer building clean, interactive web experiences 
                  focused on performance, motion and strong design systems.
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-start md:items-end gap-5">

                <div className="flex gap-3 flex-wrap">
                  <span className="px-4 py-1.5 text-[11px] rounded-full 
                  bg-green-500/20 text-green-400 border border-green-500/20">
                    ● AVAILABLE FOR WORK
                  </span>

                  <span className="px-4 py-1.5 text-[11px] rounded-full border border-white/20 text-white/50">
                    INDIA
                  </span>

                  <span className="px-4 py-1.5 text-[11px] rounded-full border border-white/20 text-white/50">
                    FRONTEND
                  </span>
                </div>

                <div className="hidden md:flex flex-col items-center gap-3 mt-12 text-white/30">
                  <div className="w-[1px] h-20 bg-white/20"></div>
                  <span className="text-[10px] tracking-[0.35em] rotate-90">
                    SCROLL
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="mt-24 md:mt-32">
        <Ticker />
      </div>
    </>
  );
}