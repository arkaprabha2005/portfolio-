export default function More() {
  return (
    <section className="w-screen px-6 md:px-16 py-24 border-t border-white/10 bg-black text-white">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* LEFT TEXT */}
        <div>
          <h3 className="text-lg font-medium mb-2">
            Looking for more?
          </h3>

          <p className="text-white/40 max-w-xl text-sm">
            Explore more of my work, experiments, and projects on my GitHub.
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <a
          href="https://github.com/arkaprabha2005"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 
          border border-white/20 rounded-full 
          text-sm text-white/70 
          hover:bg-white hover:text-black 
          hover:gap-3
          transition duration-300"
        >
          VIEW GITHUB ↗
        </a>

      </div>

    </section>
  );
}