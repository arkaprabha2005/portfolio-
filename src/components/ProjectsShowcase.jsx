import React, { useEffect, useState, useRef } from "react";


export default function ProjectsShowcase() {
   const textRef = useRef(null);

const [opacity, setOpacity] = useState(1);

const p1Ref = useRef(null);
const p2Ref = useRef(null);
const p3Ref = useRef(null);
const p4Ref = useRef(null);


useEffect(() => {
  const elements = [
  { ref: p1Ref, className: "drop-left" },
  { ref: p2Ref, className: "drop-right" },
  { ref: p3Ref, className: "drop-left" },
  { ref: p4Ref, className: "drop-right" },
];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          const config = elements.find(e => e.ref.current === el);
          if (!config) return;

          const index = elements.indexOf(config);

          setTimeout(() => {
            el.classList.add(config.className);
          }, index * 150); // stagger
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach(({ ref }) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => observer.disconnect();
}, []);



useEffect(() => {
  const handleScroll = () => {
    const el = textRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 🔥 CENTER of element
    const elementCenter = rect.top + rect.height / 2;

    // 🔥 CENTER of screen
    const screenCenter = windowHeight / 2;

    // distance from center (0 = perfect center)
    const distance = Math.abs(elementCenter - screenCenter);

    // 🔧 CONTROLS (THIS is what you wanted)
    const fadeStart = 0.4 * windowHeight; // start fading after 20% away
    const fadeEnd = 0.6 * windowHeight;   // fully gone at 40% away

    let newOpacity;

    if (distance < fadeStart) {
      newOpacity = 1; // fully visible at center
    } else if (distance > fadeEnd) {
      newOpacity = 0; // fully gone when far
    } else {
      // smooth fade between
      const progress = (distance - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = 1 - progress;
    }

    setOpacity(newOpacity);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section id="projects-section" className="relative bg-black text-white pt-[400px] pb-24 overflow-hidden">

      <div
  ref={textRef}
  className="absolute left-1/2 top-[120px] -translate-x-1/2 text-center pointer-events-none transition-opacity duration-200"
  style={{ opacity }}
>
  
  <h1
    className="text-white/80 text-5xl md:text-8xl tracking-widest"
    style={{ fontFamily: "Signature" }}
  >
    What I Did
  </h1>

  <div className="flex justify-center gap-3 mt-4">
    <img src="/arrows/arrow6.png" className="w-[250px] opacity-40" />

  </div>

</div>

      <div className="relative max-w-6xl mx-auto">

        {/* PROJECT 1 */}
        <div className="relative min-h-[280px] md:h-[360px] mb-28 md:mb-0">
          <div
  ref={p1Ref}
  className="absolute left-1/2 -translate-x-1/2 md:left-[3%] md:translate-x-0 w-[85%] md:w-[44%] origin-bottom opacity-0"
  style={{
    transformOrigin: "top left",
    "--final-rotate": "6deg"
  }}
>
            <a href="https://github.com/arkaprabha2005/POSHAN" target="_blank">
             <div className="bg-white p-2 shadow-2xl relative overflow-visible">
                <img src="/images/poshan-mockup.png" />
               
                <p
  className="
  scribble
    absolute
    top-[40px]
    left-[160%]
    -translate-x-1/2
    text-white/80
    text-xl md:text-3xl
    rotate-[10deg]
    opacity-60
    whitespace-nowrap
    pointer-events-none
    select-none
  "
  style={{ fontFamily: "Signature" }}
>
  oh ! you'd like this
</p>

                <img
  src="/arrows/arrow1.png"
  className="
    absolute
    w-[100%]
    top-[25%]
    left-[100%]
    rotate-[20deg]
    opacity-50
    pointer-events-none
    select-none
  "
/>
               
              </div>
            </a>

            <div className="mt-4">
              <h3
  className="text-3xl md:text-6xl leading-none relative z-10"
  style={{ fontFamily: "Signature" }}
>
  Poshan
</h3>
              <p className="text-white/70 text-sm">
                AI-powered agriculture platform
              </p>
              <p className="text-green-400 text-xs mt-1">
                React • AI • Firebase
              </p>
              
            </div>
          </div>

          {/* Arrow */}
         
          
        </div>

        {/* PROJECT 2 */}
        <div className="relative min-h-[280px] md:h-[360px] mb-28 md:mb-0">
         <div
  ref={p2Ref}
  className="absolute left-1/2 -translate-x-1/2 md:right-[3%] md:left-auto md:translate-x-0 w-[85%] md:w-[44%] origin-top opacity-0"
  style={{
    transformOrigin: "top right",
    "--final-rotate": "-6deg"
  }}
>
            <a href="https://github.com/arkaprabha2005/goalwise-desk" target="_blank">
              <div
  
  className="bg-white p-2 shadow-2xl relative overflow-visible"
  style={{
  transformOrigin: "top right",
  "--final-rotate": "-6deg"
}}
>
                <img src="/images/placeholder-2.jpg" />
                  <img
  src="/arrows/arrow2.png"
  className="
    absolute
    w-[100%]
    top-[25%]
    left-[-95%]
    rotate-[20deg]
    opacity-50
    pointer-events-none
    select-none
  "
/>

<p
  className="
  scribble
    absolute
    top-[70%]
    left-[-60%]
    -translate-x-1/2
    text-white/80
    text-xl md:text-4xl
    rotate-[10deg]
    whitespace-nowrap
    opacity-60
    pointer-events-none
    select-none
  "
  style={{ fontFamily: "Signature" }}
>
  this one's fun
</p>

                

              </div>
            </a>

            <div className="mt-4">
              <h3
  className="text-3xl md:text-6xl leading-none relative z-10"
  style={{ fontFamily: "Signature" }}
>
  GoalWise Desk
</h3>
              <p className="text-white/70 text-sm">
                Task & productivity system
              </p>
              <p className="text-green-400 text-xs mt-1">
                React • Node • MongoDB
              </p>
            </div>
          </div>

        
        </div>

        {/* PROJECT 3 */}
      <div className="relative min-h-[280px] md:h-[360px] mb-28 md:mb-0">
         <div
  ref={p3Ref}
  className="absolute left-1/2 -translate-x-1/2 md:left-[3%] md:translate-x-0 w-[85%] md:w-[44%] origin-bottom opacity-0"
  style={{
    transformOrigin: "top left",
    "--final-rotate": "4deg"
  }}
>
            <a href="#">
              <div
  className="bg-white p-2 shadow-2xl"
  style={{
  transformOrigin: "top left",
  "--final-rotate": "4deg"
}}
>
                <img src="/images/placeholder-3.jpg" />
                <img
  src="/arrows/arrow3.png"
  className="
    absolute
    w-[70%]
    top-[5%]
    left-[100%]
    opacity-50
    rotate-[20deg]
    pointer-events-none
    select-none
  "
/>

<p
  className="
    absolute
    scribble
    top-[40%]
    left-[165%]
    text-white/80
    text-xl md:text-3xl
    rotate-[6deg]
    opacity-60
    whitespace-nowrap
    pointer-events-none
    select-none
  "
  style={{ fontFamily: "Signature" }}
>
  check this out
</p>
              </div>
            </a>

            <div className="mt-4">
              <h3
  className="text-3xl md:text-6xl leading-none relative z-10"
  style={{ fontFamily: "Signature" }}
>
  Chat Application
</h3>
              <p className="text-white/70 text-sm">
                Real-time socket messaging
              </p>
              <p className="text-green-400 text-xs mt-1">
                Java • Sockets • Swing
              </p>
            </div>
          </div>

         
         
        </div>

        {/* PROJECT 4 */}
        <div className="relative min-h-[470px] md:h-[360px] mb-28 md:mb-0">
          <div
  ref={p4Ref}
  className="absolute left-1/2 -translate-x-1/2 md:right-[3%] md:left-auto md:translate-x-0 w-[85%] md:w-[44%] origin-top opacity-0"
  style={{
    transformOrigin: "top right",
    "--final-rotate": "-5deg"
  }}
>
            <a href="#">
              <div
  className="bg-white p-2 shadow-2xl"
  style={{
  transformOrigin: "top right",
  "--final-rotate": "-5deg"
}}
>
                <img src="/images/placeholder-4.jpg" />
                <img
  src="/arrows/arrow4.png"
  className="
    absolute
    w-[40%]
    top-[-5%]
    left-[-45%]
    rotate-[10deg]
    opacity-50
    pointer-events-none
    select-none
  "
/>

<p
  className="
  scribble
    absolute
    top-[30%]
    left-[-70%]
    text-white/80
    text-xl md:text-3xl

    rotate-[-7deg]
    opacity-60
    whitespace-nowrap
    pointer-events-none
    select-none
  "
  style={{ fontFamily: "Signature" }}
>
  this is special !
</p>
              </div>
              
            </a>
            

            <div className="mt-4">
              <h3
  className="text-3xl md:text-6xl leading-none relative z-10"
  style={{ fontFamily: "Signature" }}
>
  Portfolio
</h3>
              <p className="text-white/70 text-sm">
                Motion-based UI experience
              </p>
              <p className="text-green-400 text-xs mt-1">
                React • Three.js • Tailwind
              </p>
            </div>
          </div>

         
        </div>
        <img
  src="/arrows/arrow5.png"
  className="
    absolute
    left-1/2
    bottom-[-100px]
    -translate-x-1/2
    w-[300px]
    opacity-50
    pointer-events-none
    select-none
  "
/>

      </div>
    </section>
  );
}