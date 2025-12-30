import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";

export default function ProductHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    setOpen(false);

    // If already on products page → scroll directly
    if (location.pathname === "/products") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate first, then scroll after page loads
      navigate("/products");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-xl">
      {/* Top neon line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-white to-orange-500" />

      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* LEFT: Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-900/80 border border-orange-400/80 shadow-[0_0_25px_rgba(251,146,60,0.6)] flex items-center justify-center">
            <img
              src={logo}
              alt="Ceylon Dubhe Logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-wide text-white">
              CEYLON <span className="text-orange-500 italic">DUBHE</span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Build • Power • Perform
            </span>
          </div>
        </div>

        {/* RIGHT: Secure Search Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="
              flex items-center gap-2
              rounded-full
              border border-orange-400/50
              bg-slate-950/70
              px-4 py-2
              text-sm text-slate-200
              shadow-[0_0_15px_rgba(251,146,60,0.4)]
              hover:border-orange-400
              hover:text-orange-400
              transition
            "
          >
            🔍 Search Products
          </button>

          {open && (
            <div
              className="
                absolute right-0 mt-3 w-56
                rounded-xl
                border border-orange-400/40
                bg-slate-950
                shadow-[0_0_25px_rgba(251,146,60,0.6)]
                overflow-hidden
                z-50
              "
            >
              <button
                onClick={() => goToSection("power-tools")}
                className="block w-full px-4 py-3 text-left text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
              >
                Power Tools
              </button>

              <button
                onClick={() => goToSection("hand-tools")}
                className="block w-full px-4 py-3 text-left text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
              >
                Hand Tools
              </button>

              <button
                onClick={() => goToSection("sanitaryware")}
                className="block w-full px-4 py-3 text-left text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 transition"
              >
                Sanitaryware
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
