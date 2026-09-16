import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? "rgba(5,5,5,0.96)"
          : "rgba(5,5,5,0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Red accent line */}
      <div className="h-[1px] bg-ns-red" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex flex-col leading-none select-none">
          <span
            className="text-ns-off-white tracking-[0.22em] font-bold text-lg uppercase"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.22em" }}
          >
            NO SAINT
          </span>
          <span
            className="text-ns-gray tracking-[0.32em] font-light"
            style={{ fontSize: "8px", letterSpacing: "0.32em" }}
          >
            SMELL GOOD. MISBEHAVE.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["SHOP", "OUR SCENTS", "ABOUT"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-ns-gray hover:text-ns-off-white tracking-[0.22em] font-medium transition-colors duration-200 group"
              style={{ fontSize: "11px" }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ns-red group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="text-ns-gray hover:text-ns-off-white transition-colors duration-200" aria-label="Search">
            <Search size={15} strokeWidth={1.5} />
          </button>
          <button className="hidden md:flex text-ns-gray hover:text-ns-off-white transition-colors duration-200" aria-label="Account">
            <User size={15} strokeWidth={1.5} />
          </button>
          <button className="relative text-ns-gray hover:text-ns-off-white transition-colors duration-200" aria-label="Cart">
            <ShoppingBag size={15} strokeWidth={1.5} />
            <span
              className="absolute -top-1.5 -right-1.5 bg-ns-red text-ns-off-white rounded-full flex items-center justify-center font-semibold"
              style={{ width: "14px", height: "14px", fontSize: "8px" }}
            >
              2
            </span>
          </button>
          <button
            className="md:hidden text-ns-gray hover:text-ns-off-white transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? "280px" : "0",
          backgroundColor: "rgba(11,11,11,0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="px-6 py-6 space-y-1 border-t border-ns-border">
          {["SHOP", "OUR SCENTS", "ABOUT"].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center justify-between text-ns-off-white tracking-[0.22em] py-4 border-b border-ns-border hover:text-ns-gray transition-colors"
              style={{ fontSize: "11px" }}
            >
              {item}
              <span className="text-ns-red" style={{ fontSize: "8px" }}>→</span>
            </a>
          ))}
          <div className="flex gap-6 pt-4">
            <button className="text-ns-gray tracking-[0.2em] hover:text-ns-off-white transition-colors" style={{ fontSize: "10px" }}>
              ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
