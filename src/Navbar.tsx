import { useState } from "react";
import logo from "./assets/logo.png";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30">
      {/* Top neon line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-white to-orange-500" />

      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">

          {/* ================= BRAND ================= */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-slate-900/80 border border-orange-400/80 shadow-[0_0_25px_rgba(251,146,60,0.6)] flex items-center justify-center">
                <img src={logo} alt="Dubhe Logo" className="h-8 w-8 object-contain" />
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold tracking-wide">
                CEYLON <span className="text-orange-500 italic">DUBHE</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Build • Power • Perform
              </span>
            </div>
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center gap-7 md:flex">

            <a href="#home" className="nav-link">Home</a>

            {/* -------- PRODUCTS DROPDOWN -------- */}
           <div className="relative">
  <button
    onClick={() => setProductOpen((prev) => !prev)}
    className="nav-link flex items-center gap-1"
  >
    Products ▾
  </button>


              {productOpen && (
  <div className="absolute top-full mt-2 w-52 rounded-xl border border-orange-400/40 bg-slate-950 shadow-[0_0_30px_rgba(251,146,60,0.4)]">
    
    {/* All Products */}
    <a
      href="/products"
      onClick={() => setProductOpen(false)}
      className="block px-4 py-3 text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
    >
      All Products
    </a>

    {/* Power Tools */}
    <a
      href="/products#power-tools"
      onClick={() => setProductOpen(false)}
      className="block px-4 py-3 text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
    >
      Power Tools
    </a>

    {/* Hand Tools */}
    <a
      href="/products#hand-tools"
      onClick={() => setProductOpen(false)}
      className="block px-4 py-3 text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
    >
      Hand Tools
    </a>

    {/* Sanitaryware */}
    <a
      href="/products#sanitaryware"
      onClick={() => setProductOpen(false)}
      className="block px-4 py-3 text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
    >
      Sanitaryware
    </a>

  </div>
)}

            </div>

            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>

            <a
              href="#contact"
              className="rounded-full border border-orange-400/80 bg-gradient-to-r from-orange-500 via-white to-orange-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_25px_rgba(251,146,60,0.6)]"
            >
              Get a Quote
            </a>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-md border border-slate-700 bg-slate-900/70 p-2"
          >
            ☰
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <a href="#home" className="mobile-link">Home</a>

            <details className="group">
              <summary className="mobile-link cursor-pointer">
                Products
              </summary>
             <a href="/products#all" target="_blank">All Products</a>
<a href="/products#power-tools" target="_blank">Power Tools</a>
<a href="/products#hand-tools" target="_blank">Hand Tools</a>
<a href="/products#sanitaryware" target="_blank">Sanitaryware</a>

            </details>

            <a href="#about" className="mobile-link">About</a>
            <a href="#contact" className="mobile-link">Contact</a>
          </div>
        )}
      </nav>

      {/* ====== reusable styles ====== */}
      <style>{`
        .nav-link {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #cbd5e1;
          transition: all 0.3s;
        }
        .nav-link:hover {
          color: #fb923c;
          text-shadow: 0 0 12px rgba(251,146,60,1);
        }
        .mobile-link {
          display: block;
          padding: 12px 16px;
          color: #e5e7eb;
        }
        .mobile-sub-link {
          display: block;
          padding: 10px 28px;
          font-size: 0.9rem;
          color: #fb923c;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

