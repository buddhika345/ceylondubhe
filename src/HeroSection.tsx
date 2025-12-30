import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PhotoCarousel from "./PhotoCarousel";


const HeroSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Parallax cyber grid moving slightly on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950/80 to-slate-950/40"
    >
      {/* Cyber grid background */}
      <motion.div
        style={{ y: translateY, opacity }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.22),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(15,23,42,0.9)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </motion.div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:py-20">
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >

   <h1 className="text-4xl md:text-5xl font-bold">
  Powering Work with{" "}
  <span className="text-orange-500">Precision & Strength</span>
</h1>

<p className="mt-6 text-gray-400 max-w-2xl mx-auto text-justify">
  Ceylon Dubhe (Pvt) Ltd is a leading supplier of high-quality power tools,
  hand tools, and sanitaryware, serving customers across Sri Lanka with
  reliable products designed for better performance and everyday life.
</p>
<p className="mt-4 text-sm uppercase tracking-widest text-gray-500">
  Power • Precision • Performance
</p><br></br>
          <div className="flex flex-wrap gap-3">
          <a
  href="#services"
  className="
    rounded-full
    bg-orange-500
    px-5 py-2
    text-sm font-semibold
    text-white
    shadow-[0_0_25px_rgba(251,146,60,0.7)]
    hover:bg-orange-400
    transition-all duration-300
  "
>
  View Products
</a>

        <a
  href="#contact"
  className="
    rounded-full
    border border-orange-400
    px-5 py-2
    text-sm font-semibold
    text-white
    hover:bg-white
    hover:text-orange-500
    hover:border-white
    transition-all duration-300
  "
>
  Talk to Us
</a>

          </div>

          {/* Small tech stack chips */}
 <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-300">
  {[
    "Power Tools",
    "Hand Tools",
    "Sanitaryware",
    "Industrial Grade",
    "High Performance",
    "Durable Build",
    "Professional Use",
    "Quality Tested",
    "Dealer Network",
    "Tools for Better Life",
  ].map((item) => (
    <span
      key={item}
      className="
        rounded-full
        border border-orange-400/40
        bg-slate-900/70
        px-3 py-1
        text-slate-200
        hover:border-orange-400
        hover:text-orange-300
        transition
      "
    >
      {item}
    </span>
  ))}
</div>

        </motion.div>

        {/* Right side cyber card */}
 <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="w-full max-w-md flex justify-center"
>
  <div className="relative">
    {/* Glow effect */}
    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-500 via-white to-orange-500 opacity-30 blur-2xl"></div>

    {/* Image */}
    <img
      src="/assets/profile.png"
      className="relative rounded-3xl border border-orange-400/40 shadow-[0_0_40px_rgba(251,146,60,0.35)] object-contain animate-shake"
    />
  </div>
</motion.div>


      </div>

      {/* Scroll down / mouse indicator */}
      <div className="relative flex justify-center pb-8">
        <motion.div
          className="flex flex-col items-center text-[11px] text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="mb-2 uppercase tracking-[0.3em] text-slate-500">
            Scroll
          </span>
          <div className="flex flex-col items-center gap-2">
            {/* mouse outline */}
            <div className="flex h-8 w-5 items-center justify-start rounded-full border border-slate-500">
              <motion.div
                className="mx-auto h-1 w-1 rounded-full bg-slate-400"
                animate={{ y: [2, 6, 2], opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            {/* arrow */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-slate-500"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
      
<PhotoCarousel />
    </section>
  );
};

export default HeroSection;
