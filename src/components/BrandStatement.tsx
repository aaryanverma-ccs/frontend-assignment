export default function BrandStatement() {
  return (
    <section className="py-36 md:py-48 bg-ns-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          <div className="col-span-12 lg:col-span-10" style={{ gridColumnStart: 2 }}>
            <p
              className="text-ns-gray tracking-[0.42em] mb-12 font-medium"
              style={{ fontSize: "9px" }}
            >
              — THE NO SAINT MANIFESTO
            </p>

            <h2
              className="text-ns-off-white font-bold leading-[1.02] mb-16 md:mb-20"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(38px, 6.5vw, 100px)",
              }}
            >
              "NOT MADE TO
              <br />
              PLEASE
              <br />
              <span
                className="italic"
                style={{ color: "#a5a19d" }}
              >
                EVERYONE."
              </span>
            </h2>

            <div className="ml-auto" style={{ maxWidth: "520px" }}>
              <div
                className="mb-8"
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "#c8101e",
                }}
              />
              <p
                className="text-ns-gray font-light leading-relaxed tracking-wide"
                style={{ fontSize: "14px", lineHeight: "1.85" }}
              >
                NO SAINT is fragrance with an attitude. Bold scents for people who choose their own{" "}
                <span className="text-ns-red font-semibold tracking-widest">RULES</span>
                , leave an impression, and never apologize for taking up space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
