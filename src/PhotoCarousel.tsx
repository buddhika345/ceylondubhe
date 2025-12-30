import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/s01.png",
  "/assets/s04.png",
  "/assets/s02.png",
  "/assets/s03.png",
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden py-10">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-white/10 to-orange-500/10 blur-3xl"></div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[0, 1].map((offset) => {
              const imgIndex = (index + offset) % images.length;
              return (
                <div
                  key={imgIndex}
                  className="relative rounded-3xl border border-orange-400/40 bg-slate-900/60 shadow-[0_0_40px_rgba(251,146,60,0.35)] overflow-hidden"
                >
                  <img
                    src={images[imgIndex]}
                    alt="Carousel item"
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Overlay text */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                
                    <p className="text-xs text-slate-300">
                      Ceylon Dubhe (Pvt) Ltd
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
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
    </div>
  );
}
