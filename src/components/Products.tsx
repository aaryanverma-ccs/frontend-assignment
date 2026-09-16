import { useState } from "react";

const products = [
  {
    number: "01",
    name: "AFTER DARK",
    profile: "Oud · Amber · Black Pepper",
    gender: "Unisex",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1780943004155-1b2c5424fb2e?w=600&h=800&fit=crop&auto=format",
    accent: "#c8101e",
  },
  {
    number: "02",
    name: "SINNER",
    profile: "Dark Rose · Vetiver · Musk",
    gender: "Her / Him",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1783712727690-9b90aa652771?w=600&h=800&fit=crop&auto=format",
    accent: "#8f0b15",
  },
  {
    number: "03",
    name: "RED FLAG",
    profile: "Saffron · Leather · Patchouli",
    gender: "Unisex",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1783712727652-ca082bd57fe0?w=600&h=800&fit=crop&auto=format",
    accent: "#c8101e",
  },
  {
    number: "04",
    name: "NO APOLOGIES",
    profile: "Bergamot · Cedarwood · Smoke",
    gender: "Him",
    price: "₹2,699",
    image: "https://images.unsplash.com/photo-1787861214730-ac2000bd1ba0?w=600&h=800&fit=crop&auto=format",
    accent: "#8f0b15",
  },
];

function ProductCard({
  product,
  index,
  hovered,
  onMouseEnter,
  onMouseLeave,
}: {
  product: (typeof products)[0];
  index: number;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="group flex flex-col"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image block */}
      <div
        className="relative overflow-hidden mb-6"
        style={{
          backgroundColor: "#0b0b0b",
          aspectRatio: "3/4",
        }}
      >
        <img
          src={product.image}
          alt={`NO SAINT ${product.name}`}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 50%)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        {/* Product number */}
        <div className="absolute top-4 left-4">
          <span
            className="text-ns-gray tracking-[0.35em] font-light"
            style={{ fontSize: "9px" }}
          >
            {product.number}
          </span>
        </div>
        {/* Red accent line */}
        <div
          className="absolute bottom-0 left-0 transition-all duration-500"
          style={{
            height: "2px",
            backgroundColor: product.accent,
            width: hovered ? "100%" : "32px",
          }}
        />
        {/* View scent on hover */}
        <div
          className="absolute bottom-5 right-5 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(8px)" }}
        >
          <a
            href="#"
            className="text-ns-off-white tracking-[0.25em] font-medium"
            style={{ fontSize: "9px" }}
          >
            VIEW SCENT →
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="text-ns-off-white font-bold tracking-[0.15em]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "18px" }}
        >
          {product.name}
        </h3>
        <p
          className="text-ns-gray font-light tracking-wider"
          style={{ fontSize: "11px", letterSpacing: "0.12em" }}
        >
          {product.profile}
        </p>
        <p
          className="text-ns-gray tracking-[0.28em] font-medium mt-1"
          style={{ fontSize: "9px", color: "rgba(165,161,157,0.6)" }}
        >
          {product.gender.toUpperCase()}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span
            className="text-ns-off-white font-medium tracking-wider"
            style={{ fontSize: "15px" }}
          >
            {product.price}
          </span>
          <button
            className="text-ns-black bg-ns-off-white tracking-[0.22em] font-semibold px-5 py-2.5 transition-all duration-300 hover:bg-ns-red hover:text-ns-off-white"
            style={{ fontSize: "9px" }}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-28 md:py-36 bg-ns-black">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-ns-gray tracking-[0.42em] mb-4 font-medium"
              style={{ fontSize: "9px" }}
            >
              — THE COLLECTION
            </p>
            <h2
              className="text-ns-off-white font-bold leading-[1.0]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(32px, 4.5vw, 68px)",
              }}
            >
              MEET YOUR NEW
              <br />
              <span className="italic">OBSESSION.</span>
            </h2>
          </div>
          <p
            className="text-ns-gray font-light max-w-xs"
            style={{ fontSize: "13px", lineHeight: "1.75", letterSpacing: "0.03em" }}
          >
            Four fragrances. Four moods.
            <br />
            One rule — don&apos;t smell ordinary.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard
              product={product}
              index={i}
              hovered={hovered}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
