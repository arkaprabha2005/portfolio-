import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="relative w-screen px-6 md:px-16 py-32 bg-black text-white border-t border-white/10 overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 blur-[2px]"
      >
        <source src="/videos/contact-bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TOP LABEL */}
        <p className="text-[11px] tracking-[0.35em] text-white/30 mb-12">
          GET IN TOUCH
        </p>

        {/* BIG CTA */}
        <a
          href="mailto:arka200515@gmail.com"
          className="group inline-block"
        >
          <h1 className="text-[60px] md:text-[120px] font-black leading-[0.9] tracking-tight">

            <span className="block">
              Say hi!
            </span>

            <span className="flex items-center gap-4">

              <span className="relative transition group-hover:text-red-500">
                Let’s talk
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>

              <span className="transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                ↗
              </span>

            </span>

          </h1>
        </a>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-20 gap-10 text-sm text-white/40">

          <div>
            <p>arka200515@gmail.com</p>
            <p>India</p>
          </div>

          <div className="flex gap-4">

            <a
              onClick={() => {
                navigator.clipboard.writeText("arka200515@gmail.com");
                window.location.href = "mailto:arka200515@gmail.com";
              }}
              className="cursor-pointer w-10 h-10 flex items-center justify-center 
              border border-white/20 rounded-full 
              text-white/60 hover:text-white hover:border-white 
              transition"
            >
              <MdEmail size={18} />
            </a>

            <a
              href="https://linkedin.com/in/arkaprabha-pal-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center 
              border border-white/20 rounded-full 
              text-white/60 hover:text-white hover:border-white 
              transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com/arkaprabha2005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center 
              border border-white/20 rounded-full 
              text-white/60 hover:text-white hover:border-white 
              transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://instagram.com/arka___05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center 
              border border-white/20 rounded-full 
              text-white/60 hover:text-white hover:border-white 
              transition"
            >
              <FaInstagram size={18} />
            </a>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Arkaprabha Pal
        </div>

      </div>

    </section>
  );
}