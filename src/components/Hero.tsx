export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden bg-ns-black">
      {/* Background image */}
      <div className="absolute inset-0 bg-ns-black">
        <img
          src="https://images.unsplash.com/photo-1780943004155-1b2c5424fb2e?w=1920&h=1080&fit=crop&auto=format"
          alt="NO SAINT signature fragrance bottle"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.52 }}
        />
        {/* Cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.65) 40%, rgba(5,5,5,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.2) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Vertical red accent */}
      <div
        className="absolute left-6 md:left-10"
        style={{
          top: "28%",
          width: "1px",
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #c8101e, transparent)",
        }}
      />

      {/* Small label top-right */}
      <div className="absolute top-24 right-6 md:right-10 text-right">
        <p
          className="text-ns-gray tracking-[0.35em] font-light"
          style={{ fontSize: "9px" }}
        >
          EDITORIAL CAMPAIGN 2026
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-3xl">
          <p
            className="text-ns-gray tracking-[0.42em] mb-8 font-medium"
            style={{ fontSize: "9px" }}
          >
            EST. 2026 — INDIA
          </p>

          <h1
            className="text-ns-off-white leading-[0.88] mb-8 md:mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span
              className="block font-black italic"
              style={{ fontSize: "clamp(58px, 9.5vw, 148px)" }}
            >
              SMELL GOOD.
            </span>
            <span
              className="block font-black"
              style={{ fontSize: "clamp(58px, 9.5vw, 148px)" }}
            >
              MISBEHAVE.
            </span>
          </h1>

          <p
            className="text-ns-gray tracking-[0.16em] mb-12 md:mb-14 font-light max-w-sm"
            style={{ fontSize: "13px", lineHeight: "1.8" }}
          >
            Fragrance for those who were never meant to blend in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-ns-off-white text-ns-black tracking-[0.28em] font-semibold px-8 py-4 transition-all duration-300 hover:bg-ns-red hover:text-ns-off-white"
              style={{ fontSize: "10px" }}
            >
              SHOP THE COLLECTION
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center text-ns-off-white tracking-[0.28em] font-medium px-8 py-4 transition-all duration-300 hover:border-ns-red"
              style={{
                fontSize: "10px",
                border: "1px solid rgba(242,238,232,0.25)",
              }}
            >
              DISCOVER YOUR SCENT
            </a>
          </div>
        </div>

        {/* Bottom detail */}
        <div
          className="absolute bottom-0 right-6 md:right-10 text-right hidden md:block"
          style={{ bottom: "-2px" }}
        >
          <p
            className="text-ns-gray tracking-[0.32em]"
            style={{ fontSize: "8px" }}
          >
            NO SAINT × AFTER DARK
          </p>
          <div
            className="w-12 ml-auto mt-1"
            style={{ height: "1px", backgroundColor: "rgba(242,238,232,0.12)" }}
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #050505)",
        }}
      />
    </section>
  );
}
