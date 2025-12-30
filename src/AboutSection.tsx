import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-slate-950/70 py-12"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            About Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-50">
            Vision & Innovation: The Story of Our Founder
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Driven by the vision <span className="text-orange-400">“Tools for Better Life”</span>, 
            we combine global expertise with local strength to deliver lasting value nationwide.
          </p>
        </motion.div>

        {/* OUTER BORDER WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-2xl
            border border-orange-400/40
            bg-slate-900/60
            p-6
            shadow-[0_0_45px_rgba(251,146,60,0.15)]
          "
        >
          {/* 3 COLUMN GRID */}
      <div className="grid gap-6 md:grid-cols-4 items-stretch">

  {/* COLUMN 1 & 2 – PARAGRAPH (span 2 columns) */}
  <div
    className="
      md:col-span-2
      rounded-xl bg-slate-950/60 p-5
      transition hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]
    "
  >
    <p className="text-sm text-slate-300 leading-relaxed text-justify">
      Ceylon Dubhe (Pvt) Ltd, founded in 2022 by Chinese entrepreneur Mr. Wei Qun,
      is a leading supplier of high-quality power tools. The company offers a
      broad range of products including power tools, hand tools, and nails,
      serving diverse industries across Sri Lanka.

      <br /><br />

      With specialized divisions covering Accounting, Finance, Sales, Marketing,
      HR, IT, Transport, Delivery, and Supply Chain, Ceylon Dubhe ensures
      operational efficiency and reliable service delivery. Supported by a
      nationwide dealer network of over 1,000 partners and an annual turnover
      of USD 10 million, the company demonstrates strong growth and financial
      stability.

      <br /><br />

      Guided by the motto <span className="text-orange-400">“Tools for Better Life”</span>,
      Ceylon Dubhe continues to expand locally and internationally while
      enhancing everyday work performance.
    </p>
  </div>

  {/* COLUMN 3 – MISSION & VISION */}
  <div className="flex flex-col gap-4 h-full">

    {/* Mission */}
    <div
      className="
        flex-1
        rounded-xl
        bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950
        p-5
        border border-orange-400/30
        shadow-[0_0_20px_rgba(251,146,60,0.12)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-400/70
        hover:shadow-[0_0_35px_rgba(251,146,60,0.35)]
      "
    >
      <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-2">
        Mission
      </p>
      <p className="text-sm text-slate-300 leading-relaxed">
        To deliver innovative, high-quality power tools that empower
        professionals and enthusiasts through reliable performance
        and exceptional service.
      </p>
    </div>

    {/* Vision */}
    <div
      className="
        flex-1
        rounded-xl
        bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950
        p-5
        border border-orange-400/25
        shadow-[0_0_18px_rgba(251,146,60,0.1)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-400/60
        hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]
      "
    >
      <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-2">
        Vision
      </p>
      <p className="text-sm text-slate-300 leading-relaxed">
        To become Sri Lanka’s most trusted power tool brand,
        defined by innovation, reliability, and long-term value.
      </p>
    </div>

  </div>

  {/* COLUMN 4 – MAP */}
  <div
    className="
      h-full
      rounded-xl bg-slate-950/60 p-4
      flex flex-col items-center justify-center
      transition hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]
    "
  >
    <img
      src="/assets/map.png"
      alt="Dealer Network Map"
      className="w-full max-w-[260px] object-contain rounded-lg"
    />
    <p className="mt-3 text-sm text-orange-400 font-medium">
      Nationwide Dealer Network
    </p>
  </div>

</div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
