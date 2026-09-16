const features = [
  {
    label: "LONG-LASTING",
    body: "Designed to stay with you from first impression to last call.",
  },
  {
    label: "MADE TO STAND OUT",
    body: "Distinctive fragrance profiles for people who hate smelling predictable.",
  },
  {
    label: "UNISEX ATTITUDE",
    body: "Wear what feels like you. No rules. No labels.",
  },
  {
    label: "MADE FOR INDIA",
    body: "Created with India's climate, lifestyle and modern fragrance culture in mind.",
  },
];

export default function WhyNoSaint() {
  return (
    <section className="py-28 md:py-36 bg-ns-black">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-ns-gray tracking-[0.42em] mb-4 font-medium"
              style={{ fontSize: "9px" }}
            >
              — WHY NO SAINT
            </p>
            <h2
              className="text-ns-off-white font-bold leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(30px, 3.8vw, 56px)",
              }}
            >
              BUILT
              <br />
              DIFFERENTLY.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((f, i) => (
            <div
              key={f.label}
              className="group py-10 px-0 md:px-8 md:first:pl-0 md:last:pr-0 flex flex-col gap-4"
              style={{
                borderTop: "1px solid rgba(242,238,232,0.08)",
                borderRight: i < features.length - 1 ? "1px solid rgba(242,238,232,0.08)" : "none",
              }}
            >
              {/* Red mark */}
              <div
                className="transition-all duration-300 group-hover:w-8"
                style={{ width: "16px", height: "1px", backgroundColor: "#c8101e" }}
              />

              <h3
                className="text-ns-off-white tracking-[0.2em] font-semibold leading-snug"
                style={{ fontSize: "11px" }}
              >
                {f.label}
              </h3>

              <p
                className="text-ns-gray font-light leading-relaxed"
                style={{ fontSize: "13px", lineHeight: "1.8" }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
