export default function Lifestyle() {
  return (
    <section className="bg-ns-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
          {/* Image side */}
          <div className="relative overflow-hidden bg-ns-black-2 min-h-[400px] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1779911915329-bbbbf613d931?w=900&h=1100&fit=crop&auto=format"
              alt="NO SAINT lifestyle — confident and contemporary"
              className="w-full h-full object-cover object-top"
              style={{ opacity: 0.85 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, #050505 100%)",
              }}
            />
            {/* Small label */}
            <div className="absolute bottom-8 left-8">
              <p
                className="text-ns-gray tracking-[0.35em]"
                style={{ fontSize: "8px" }}
              >
                NO SAINT — CAMPAIGN 2026
              </p>
            </div>
          </div>

          {/* Text side */}
          <div
            className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 md:py-0"
            style={{ backgroundColor: "#050505" }}
          >
            <p
              className="text-ns-gray tracking-[0.42em] mb-10 font-medium"
              style={{ fontSize: "9px" }}
            >
              — THE EXPERIENCE
            </p>

            <h2
              className="text-ns-off-white font-bold leading-[1.02] mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 68px)",
              }}
            >
              "LEAVE
              <br />
              SOMETHING
              <br />
              <span className="italic text-ns-red">BEHIND."</span>
            </h2>

            <p
              className="text-ns-gray font-light mb-12 leading-relaxed"
              style={{ fontSize: "14px", lineHeight: "1.85", maxWidth: "340px" }}
            >
              Your presence should linger long after you&apos;ve left the room.
            </p>

            <div
              className="w-8 mb-12"
              style={{ height: "1px", backgroundColor: "#c8101e" }}
            />

            <a
              href="#"
              className="inline-flex self-start items-center gap-3 text-ns-off-white tracking-[0.28em] font-medium transition-all duration-300 group"
              style={{ fontSize: "10px" }}
            >
              <span
                className="border-b group-hover:border-ns-red transition-colors duration-300 pb-0.5"
                style={{ borderColor: "rgba(242,238,232,0.3)" }}
              >
                EXPLORE NO SAINT
              </span>
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "#c8101e" }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
