import { useState } from "react";

export default function EmailCTA() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) console.log("Form submitted");
  };

  return (
    <section
      className="relative py-36 md:py-48 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Subtle red glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "600px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, #c8101e 30%, #c8101e 70%, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Background red accent - bottom right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(ellipse at bottom right, rgba(200,16,30,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-ns-gray tracking-[0.42em] mb-8 font-medium"
            style={{ fontSize: "9px" }}
          >
            — INNER CIRCLE
          </p>

          <h2
            className="text-ns-off-white font-bold leading-[1.0] mb-8"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(40px, 6vw, 88px)",
            }}
          >
            JOIN THE
            <br />
            <span className="italic text-ns-red">SAINTS.</span>
          </h2>

          <p
            className="text-ns-gray font-light mb-14 leading-relaxed"
            style={{ fontSize: "14px", lineHeight: "1.85" }}
          >
            New drops. Limited releases. Dangerous combinations.
            <br />
            Nothing boring.
          </p>

          {joined ? (
            <div>
              <div
                className="mb-4"
                style={{ height: "1px", backgroundColor: "#c8101e", width: "40px", margin: "0 auto 16px" }}
              />
              <p
                className="text-ns-off-white tracking-[0.22em] font-medium"
                style={{ fontSize: "11px" }}
              >
                YOU&apos;RE IN. WELCOME TO THE DARK SIDE.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-transparent text-ns-off-white placeholder-ns-gray tracking-[0.18em] px-6 py-4 outline-none focus:border-ns-red transition-colors duration-300"
                style={{
                  fontSize: "10px",
                  border: "1px solid rgba(242,238,232,0.15)",
                  borderRight: "none",
                }}
              />
              <button
                type="submit"
                className="bg-ns-off-white text-ns-black tracking-[0.25em] font-semibold px-8 py-4 whitespace-nowrap transition-all duration-300 hover:bg-ns-red hover:text-ns-off-white"
                style={{ fontSize: "10px" }}
              >
                JOIN THE LIST
              </button>
            </form>
          )}

          <p
            className="text-ns-gray mt-8 tracking-[0.15em]"
            style={{ fontSize: "9px", opacity: 0.5 }}
          >
            No spam. Unsubscribe any time. We&apos;re not that needy.
          </p>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "600px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(242,238,232,0.06) 30%, rgba(242,238,232,0.06) 70%, transparent)",
        }}
      />
    </section>
  );
}
