import { useState } from "react";

const personalities = [
  {
    id: "seducer",
    label: "THE SEDUCER",
    desc: "Dark, magnetic, addictive.",
    fragrance: "AFTER DARK",
    image:
      "https://images.unsplash.com/photo-1749143351301-cdc34d75518b?w=600&h=900&fit=crop&auto=format",
  },
  {
    id: "rebel",
    label: "THE REBEL",
    desc: "Sharp, confident, unapologetic.",
    fragrance: "SINNER",
    image:
      "https://images.unsplash.com/photo-1776466336437-b30d0ef94cee?w=600&h=900&fit=crop&auto=format",
  },
  {
    id: "afterhours",
    label: "THE AFTER-HOURS",
    desc: "Warm, sensual, mysterious.",
    fragrance: "RED FLAG",
    image:
      "https://images.unsplash.com/photo-1481754100984-dbae571fe45b?w=600&h=900&fit=crop&auto=format",
  },
  {
    id: "wildcard",
    label: "THE WILDCARD",
    desc: "Unexpected. Impossible to ignore.",
    fragrance: "NO APOLOGIES",
    image:
      "https://images.unsplash.com/photo-1780752713142-5adfe185ae16?w=600&h=900&fit=crop&auto=format",
  },
];

export default function ScentPersonality() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      className="py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-18">
          <p
            className="text-ns-gray tracking-[0.42em] mb-4 font-medium"
            style={{ fontSize: "9px" }}
          >
            — FIND YOUR SCENT
          </p>
          <h2
            className="text-ns-off-white font-bold leading-[1.0]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(30px, 4.2vw, 64px)",
            }}
          >
            WHAT KIND OF
            <br />
            <span className="italic">TROUBLE ARE YOU?</span>
          </h2>
        </div>

        {/* 4 personality panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {personalities.map((p, index) => (
            <div
              key={p.id}
              className="relative overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "2/3", backgroundColor: "#0b0b0b" }}
              onMouseEnter={() => setActive(personalities[index - 1]?.id ?? null)}
              onMouseLeave={() => setActive(null)}
            >
              <img
                src={p.image}
                alt={p.label}
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: active === p.id ? "grayscale(0%)" : "grayscale(60%)",
                  transform: active === p.id ? "scale(1.06)" : "scale(1)",
                }}
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.3) 55%, transparent 100%)",
                }}
              />
              {/* Red line indicator */}
              <div
                className="absolute top-0 left-0 right-0 transition-all duration-300"
                style={{
                  height: active === p.id ? "2px" : "1px",
                  backgroundColor: active === p.id ? "#c8101e" : "rgba(200,16,30,0.35)",
                }}
              />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p
                  className="text-ns-red tracking-[0.32em] font-semibold mb-2"
                  style={{ fontSize: "8px" }}
                >
                  {p.fragrance}
                </p>
                <h3
                  className="text-ns-off-white font-bold tracking-[0.1em] leading-tight mb-2"
                  style={{ fontSize: "clamp(12px, 1.5vw, 15px)" }}
                >
                  {p.label}
                </h3>
                <p
                  className="text-ns-gray font-light leading-relaxed"
                  style={{ fontSize: "11px", lineHeight: "1.6" }}
                >
                  {p.desc}
                </p>
                <div
                  className="mt-4 transition-all duration-300"
                  style={{ opacity: active === p.id ? 1 : 0, transform: active === p.id ? "translateY(0)" : "translateY(6px)" }}
                >
                  <a
                    href="#"
                    className="text-ns-off-white tracking-[0.22em] font-medium border-b border-ns-off-white pb-0.5 hover:border-ns-red hover:text-ns-red transition-colors duration-200"
                    style={{ fontSize: "9px" }}
                  >
                    EXPLORE →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
