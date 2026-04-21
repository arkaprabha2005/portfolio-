import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Work from "./components/Work";
import More from "./components/More";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

export default function App() {

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 400);
      }

      setProgress(value);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const blur = 10 - (progress / 100) * 10;

  // 🔥 LOADER
  

  // 🔥 MAIN SITE
  return (
  <div className="bg-black relative">

    {/* MAIN SITE */}
    <Hero />
    <Work />
    <More />
    <About />
    <Contact />
    <Cursor />

    {/* LOADER OVERLAY */}
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 
      bg-black transition-opacity duration-700 
      ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >

      <p className="text-xs tracking-[0.3em] text-white/60 mb-6">
        ARKAPRABHA PAL
      </p>

      <h1
        style={{ filter: `blur(${blur}px)` }}
        className="text-[80px] md:text-[140px] font-black text-white transition-all duration-200"
      >
        {Math.floor(progress)}
      </h1>

      <div className="w-[200px] h-[4px] bg-white/10 mt-6 overflow-hidden rounded-full">
        <div
          className="h-full bg-green-400 transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-white/40 mt-3 tracking-widest">
        LOADING
      </p>

    </div>

  </div>
);
}