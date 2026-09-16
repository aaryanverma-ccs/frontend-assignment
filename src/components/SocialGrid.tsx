const tiles = [
  {
    src: "https://images.unsplash.com/photo-1776466336437-b30d0ef94cee?w=600&h=600&fit=crop&auto=format",
    alt: "NO SAINT community — red lighting portrait",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1780752713142-5adfe185ae16?w=600&h=400&fit=crop&auto=format",
    alt: "NO SAINT community — dramatic makeup neon",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1758474281193-37cd4ec6fe04?w=600&h=400&fit=crop&auto=format",
    alt: "NO SAINT community — colourful smoke",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1770217535686-aaa1f98f06a0?w=600&h=400&fit=crop&auto=format",
    alt: "NO SAINT community — white smoke black background",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1787877819861-551fe4a405fa?w=600&h=600&fit=crop&auto=format",
    alt: "NO SAINT community — dramatic fashion pose",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1662048796328-0ace371edbfa?w=600&h=400&fit=crop&auto=format",
    alt: "NO SAINT community — black dress editorial",
    span: "",
  },
];

export default function SocialGrid() {
  return (
    <section className="py-28 md:py-36 bg-ns-black">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p
              className="text-ns-gray tracking-[0.42em] mb-4 font-medium"
              style={{ fontSize: "9px" }}
            >
              — @NOSAINT
            </p>
            <h2
              className="text-ns-off-white font-bold leading-[1.0]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 3.8vw, 56px)",
              }}
            >
              SMELL GOOD.
              <br />
              <span className="italic text-ns-red">MISBEHAVE.</span>
            </h2>
          </div>
          <p
            className="text-ns-gray tracking-[0.2em] font-light"
            style={{ fontSize: "11px" }}
          >
            Tag @nosaint to be featured.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div
          className="grid gap-2 md:gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "220px",
          }}
        >
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer bg-ns-black-2 ${tile.span}`}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ filter: "grayscale(30%)" }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(5,5,5,0)",
                }}
              >
                <div
                  className="transition-all duration-300 group-hover:opacity-100 opacity-0 text-center"
                >
                  <div
                    className="border text-ns-off-white tracking-[0.28em] px-5 py-3 font-medium"
                    style={{
                      fontSize: "9px",
                      borderColor: "rgba(242,238,232,0.4)",
                      backgroundColor: "rgba(5,5,5,0.5)",
                    }}
                  >
                    VIEW POST
                  </div>
                </div>
              </div>
              {/* Bottom gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
