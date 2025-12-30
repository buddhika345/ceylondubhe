import { useState } from "react";
import type { Product } from "./products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedVariant = product.variants[selectedIndex];

  return (
    <div
      className="
        group rounded-2xl border border-orange-400/40
        bg-slate-900/80 p-4
        shadow-[0_0_25px_rgba(251,146,60,0.35)]
        transition hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(251,146,60,0.55)]
      "
    >
      {/* IMAGE */}
      <div className="relative mb-4 flex h-32 items-center justify-center rounded-xl bg-slate-950/60">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ imageRendering: "crisp-edges" }}
            className="
              max-h-28
              max-w-[80%]
              object-contain
              transition
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-orange-400 text-sm">
            Coming Soon
          </div>
        )}
      </div>

      {/* NAME */}
      <h3 className="text-lg font-semibold text-white text-center leading-snug">
        {product.name}
      </h3>

      {/* MODEL DROPDOWN */}
      <div className="mt-3">
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="
            w-full rounded-md bg-slate-950
            border border-orange-400/40
            px-2 py-1 text-[11px] text-white
            focus:outline-none focus:ring-1
            focus:ring-orange-500
          "
        >
          {product.variants.map((v, i) => (
            <option key={v.model} value={i}>
              {v.model}
            </option>
          ))}
        </select>
      </div>

      {/* CODE + MODEL */}
      <div className="mt-3 text-[12px] text-orange-400 flex justify-between">
        <span>
          Code : <b>{selectedVariant.code}</b>
        </span>
        <span>
          Model : <b>{selectedVariant.model}</b>
        </span>
      </div>

      {/* DESCRIPTION */}
      <div
        className="
          mt-3
          text-sm
          text-slate-300
          text-justify
          leading-relaxed
        "
        dangerouslySetInnerHTML={{ __html: selectedVariant.description }}
      />

      {/* GLOW LINE */}
      <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-orange-500/0 via-orange-500/80 to-orange-500/0 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
