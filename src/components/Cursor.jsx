import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    const speed = 0.12; // 👈 smoothing for glow

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // 🔹 DOT (no lag)
      dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      // 🔹 GLOW (smooth follow)
      glowX += (mouseX - glowX) * speed;
      glowY += (mouseY - glowY) * speed;

      glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-green-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

      {/* GLOW */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[180px] h-[180px] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%)",
        }}
      />
    </>
  );
}