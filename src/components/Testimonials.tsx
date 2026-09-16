const reviews = [
  {
    quote:
      "Finally found a perfume that actually feels like me. Dark, addictive and gets noticed every time.",
    name: "ARJUN",
    age: 27,
    fragrance: "AFTER DARK",
  },
  {
    quote: "Bought it for myself. My girlfriend stole it.",
    name: "RAHUL",
    age: 24,
    fragrance: "SINNER",
  },
  {
    quote:
      "Not another boring perfume brand. The whole vibe is different. I haven't gone back.",
    name: "ISHA",
    age: 29,
    fragrance: "RED FLAG",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <p
            className="text-ns-gray tracking-[0.42em] mb-4 font-medium"
            style={{ fontSize: "9px" }}
          >
            — FROM THE SAINTS
          </p>
          <h2
            className="text-ns-off-white font-bold leading-[1.0]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 60px)",
            }}
          >
            "THEY SMELLED YOU
            <br />
            <span className="italic">BEFORE THEY SAW YOU."</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: "rgba(242,238,232,0.06)" }}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="group flex flex-col justify-between p-8 md:p-10 gap-8"
              style={{ backgroundColor: "#0b0b0b" }}
            >
              {/* Large quotation mark */}
              <div>
                <span
                  className="text-ns-red block mb-6 leading-none"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "72px",
                    lineHeight: "0.8",
                    opacity: 0.7,
                  }}
                >
                  "
                </span>
                <p
                  className="text-ns-off-white font-light leading-relaxed"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                    fontStyle: "italic",
                    lineHeight: "1.7",
                  }}
                >
                  {r.quote}
                </p>
              </div>

              {/* Attribution */}
              <div>
                <div
                  className="mb-5"
                  style={{ height: "1px", backgroundColor: "rgba(242,238,232,0.08)" }}
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-ns-off-white tracking-[0.28em] font-semibold"
                      style={{ fontSize: "10px" }}
                    >
                      — {r.name}, {r.age}
                    </p>
                    <p
                      className="text-ns-red tracking-[0.25em] font-medium mt-1"
                      style={{ fontSize: "8px" }}
                    >
                      {r.fragrance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
