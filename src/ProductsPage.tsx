import ProductHeader from "./ProductHeader";
import ProductCard from "./ProductCard";
import { products } from "./products";
import type { Product } from "./products";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      {/* BRAND HEADER */}
      <ProductHeader />

      {/* PAGE HERO */}
      <section className="relative bg-slate-950 py-20 text-center overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,146,60,0.25),_transparent_60%)]" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
            OUR <span className="text-orange-500 italic">PRODUCTS</span>
          </h1>

          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-orange-500 via-white to-orange-500" />

          <p className="mt-6 max-w-xl mx-auto text-sm md:text-base text-slate-300">
            Discover our complete range of high-quality power tools, hand tools,
            and sanitaryware engineered for performance and durability.
          </p>
          <div className="mt-8 flex justify-center">
  <Link
    to="/"
    className="
      inline-flex items-center gap-2
      rounded-full
      bg-orange-500
      px-8 py-3
      text-sm font-semibold
      text-slate-950
      shadow-[0_0_30px_rgba(251,146,60,0.7)]
      transition-all duration-300
      hover:bg-orange-400
      hover:shadow-[0_0_45px_rgba(251,146,60,0.9)]
      active:scale-95
    "
  >
    ← Back to Home
  </Link>
</div>

        </div>
      </section>

      {/* PRODUCTS CONTENT */}
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ================= POWER TOOLS ================= */}
          <section id="power-tools" className="scroll-mt-28">
            {/* Section Header */}
           <div
  className="
    relative
    mb-10
    overflow-hidden
    rounded-2xl
    border border-orange-400/70
    bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
    px-8 py-5
    shadow-[0_0_45px_rgba(251,146,60,0.45)]
  "
>
  {/* subtle inner glow */}
  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-orange-400/20" />

  {/* left accent */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(251,146,60,1)]" />
    <span className="h-[2px] w-8 bg-gradient-to-r from-orange-500 to-transparent" />
  </div>

  {/* title */}
  <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wide text-white">
    <span className="text-orange-500">Power</span> Tools
  </h2>
</div>


            {/* Grid */}
            <div className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            ">
              {products
                .filter((p: Product) => p.category === "Power Tools")
                .map((p: Product) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </section>

          {/* ================= HAND TOOLS ================= */}
          <section id="hand-tools" className="scroll-mt-28">
           <div
  className="
    relative
    mb-10
    overflow-hidden
    rounded-2xl
    border border-orange-400/70
    bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
    px-8 py-5
    shadow-[0_0_45px_rgba(251,146,60,0.45)]
  "
>
  {/* subtle inner glow */}
  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-orange-400/20" />

  {/* left accent */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(251,146,60,1)]" />
    <span className="h-[2px] w-8 bg-gradient-to-r from-orange-500 to-transparent" />
  </div>

  {/* title */}
  <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wide text-white">
    <span className="text-orange-500">Hand</span> Tools
  </h2>
</div>


            <div className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            ">
              {products
                .filter((p: Product) => p.category === "Hand Tools")
                .map((p: Product) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </section>

          {/* ================= SANITARYWARE ================= */}
          <section id="sanitaryware" className="scroll-mt-28">
           <div
  className="
    relative
    mb-10
    overflow-hidden
    rounded-2xl
    border border-orange-400/70
    bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
    px-8 py-5
    shadow-[0_0_45px_rgba(251,146,60,0.45)]
  "
>
  {/* subtle inner glow */}
  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-orange-400/20" />

  {/* left accent */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(251,146,60,1)]" />
    <span className="h-[2px] w-8 bg-gradient-to-r from-orange-500 to-transparent" />
  </div>

  {/* title */}
  <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wide text-white">
    <span className="text-orange-500">Sanitary</span>Ware
  </h2>
</div>


            <div className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            ">
              {products
                .filter((p: Product) => p.category === "Sanitaryware")
                .map((p: Product) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
