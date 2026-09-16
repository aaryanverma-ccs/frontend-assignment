const columns = [
  {
    heading: "SHOP",
    links: ["All Scents", "Best Sellers", "New Drops"],
  },
  {
    heading: "ABOUT",
    links: ["Our Story", "The NO SAINT Code", "Contact"],
  },
  {
    heading: "HELP",
    links: ["Shipping", "Returns", "FAQ", "Track Order"],
  },
  {
    heading: "SOCIAL",
    links: ["Instagram", "Facebook"],
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{ backgroundColor: "#0b0b0b", borderTop: "1px solid rgba(242,238,232,0.06)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-16 mb-20">
          {/* Brand identity */}
          <div className="col-span-2 flex flex-col gap-6">
            <div>
              <p
                className="text-ns-off-white tracking-[0.28em] font-bold mb-1"
                style={{ fontSize: "18px", fontFamily: "'Outfit', sans-serif" }}
              >
                NO SAINT
              </p>
              <p
                className="text-ns-gray tracking-[0.32em] font-light"
                style={{ fontSize: "8px" }}
              >
                SMELL GOOD. MISBEHAVE.
              </p>
            </div>

            {/* NS Monogram */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                border: "1px solid rgba(242,238,232,0.12)",
              }}
            >
              <span
                className="text-ns-off-white font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                NS
              </span>
            </div>

            <p
              className="text-ns-gray font-light leading-relaxed"
              style={{ fontSize: "12px", lineHeight: "1.8", maxWidth: "200px" }}
            >
              Contemporary fragrance from India. Made for the ones who leave an impression.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p
                className="text-ns-off-white tracking-[0.28em] font-semibold"
                style={{ fontSize: "9px" }}
              >
                {col.heading}
              </p>
              <div
                className="mb-1"
                style={{ height: "1px", backgroundColor: "rgba(242,238,232,0.06)" }}
              />
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-ns-gray hover:text-ns-off-white transition-colors duration-200 font-light tracking-wide"
                      style={{ fontSize: "12px" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-8"
          style={{ height: "1px", backgroundColor: "rgba(242,238,232,0.06)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="text-ns-gray font-light tracking-wider"
            style={{ fontSize: "10px" }}
          >
            © 2026 NO SAINT. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-ns-gray hover:text-ns-off-white transition-colors duration-200 font-light tracking-wider"
                style={{ fontSize: "10px" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
