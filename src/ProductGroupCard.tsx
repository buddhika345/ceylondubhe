import { useState } from "react";

interface Props {
  title: string;
  items: string[];
}

export default function ProductGroupCard({ title, items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-orange-400/40 bg-slate-900/80">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between px-4 py-3 text-sm text-white"
      >
        <span className="font-semibold">{title}</span>
        <span className="text-orange-400 leading-none">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-orange-400/40 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
