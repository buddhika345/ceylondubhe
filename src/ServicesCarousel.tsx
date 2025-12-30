import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


type ServiceSlide = {
  title: string;
  description: string;
  image: string;
};

const slides: ServiceSlide[] = [
  {
    title: "Power Tools",
    description:
      "Ceylon Dubhe (Pvt) Ltd supplies durable, high-quality power tools designed to improve everyday work performance and efficiency.",
    image: "/assets/power_tool.png"


  },
  {
    title: "Hand Tools",
    description:
      "Our wide range of precision hand tools ensures reliability and ease of use for professionals and individuals alike.",
    image:
      "assets/hand_tools.png",
  },
  {
    title: "Sanitaryware",
    description:
      "We provide sanitaryware solutions that combine durability, functionality, and modern design for homes and businesses.",
    image:
      "/assets/sanitayware.png",
  },
  {
    title: "Nationwide Dealer Network",
    description:
      "With over 1,000 dealers across Sri Lanka, Ceylon Dubhe ensures accessibility, timely delivery, and excellent customer service.",
    image:
      "/assets/map_details.png",
  },
  {
    title: "Our Motto – Tools for Better Life",
    description:
      "Guided by our vision, we deliver products that enhance everyday life and support growth locally and internationally.",
    image:
      "/assets/map_details.png",
  },
];

const ServicesCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[index];

  return (
    <section
      id="services"
      className="border-t border-slate-800 bg-slate-950/60 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
         <div>
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
    Our Services
  </p>
  
  <h2 className="mt-2 text-3xl font-bold text-slate-50">
    Ceylon Dubhe (Pvt) Ltd
  </h2>
  <p className="mt-2 text-sm text-slate-300 max-w-xl text-justify">
    Founded in 2022 by Mr. Wei Qun, Ceylon Dubhe is a leading supplier of 
    high‑quality power tools, hand tools, and sanitaryware. Guided by the motto 
    “Tools for Better Life,” we are committed to delivering products that enhance 
    everyday life and work performance, supported by a nationwide dealer network 
    and strong international growth.
  </p>
</div>

             {/* Mobile nav buttons */}
                  <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={prev}
            className="rounded-full border border-orange-400/50 px-5 py-2 text-sm text-white hover:bg-orange-500 hover:text-black transition shadow-[0_0_15px_rgba(251,146,60,0.6)]"
          >
            ◀ Prev
          </button>

          <button
            onClick={next}
            className="rounded-full border border-orange-400/50 px-5 py-2 text-sm text-white hover:bg-orange-500 hover:text-black transition shadow-[0_0_15px_rgba(251,146,60,0.6)]"
          >
            Next ▶
          </button>
        </div>
</div>
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Image side */}
            <div className="relative rounded-2xl border border-orange-400/40 shadow-[0_0_40px_rgba(251,146,60,0.35)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </AnimatePresence>

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Text side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
               <p className="text-xs uppercase tracking-[0.3em] text-orange-500">

                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </p>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]">
                  {current.title}
                </h3>
                <p className="text-sm text-slate-300">{current.description}</p>

               <ul className="mt-3 text-xs text-slate-400 space-y-1">
<li>• Supplier of high‑quality power tools, hand tools, and sanitaryware</li>
  <li>• Leading supplier of power tools, hand tools, and sanitaryware</li>
  <li>• Supported by a nationwide network of 1,000+ dealers</li>
  <li>• Guided by the motto “Tools for Better Life”</li><br></br>
</ul> 
 <a
          href="/files/tools_catalog.pdf"
          target="_blank"
          className="inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white
                     shadow-[0_0_25px_rgba(249,115,22,0.6)]
                     hover:bg-orange-400 transition"
        >
          Download Product Catalog
        </a>

        

                {/* Dots indicator */}
                <div className="mt-4 flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === index
                         ? "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"
: "bg-slate-600 hover:bg-orange-300"

                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
