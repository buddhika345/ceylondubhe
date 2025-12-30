
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950/80 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-50">
            Ceylon Dubhe (Pvt) Ltd
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            Reach out to us for product inquiries, dealer partnerships, and
            professional support. Our team is ready to assist you with reliable
            solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 items-start">

          {/* LEFT – CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="
              space-y-6
              rounded-2xl
              border border-orange-400/40
              bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-950
              p-6
              shadow-[0_0_30px_rgba(251,146,60,0.5)]
            "
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-orange-400">
                Contact Information
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-100">
                Ceylon Dubhe (Pvt) Ltd
              </h3>
            </div>

            <div className="rounded-xl bg-slate-950/60 p-4 border border-orange-400/20">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-300 mb-1">
                Head Office
              </p>
              <p className="text-sm text-slate-300">
                68 1/1, Parakrama Mawatha,<br />Peliyagoda, Sri Lanka
              </p>
              <p className="mt-2 text-sm">
                <span className="text-orange-400">Hotline:</span> 011 470 1217
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/60 p-4 border border-orange-400/20">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-300 mb-1">
                Warehouse
              </p>
              <p className="text-sm text-slate-300">
                55, New Nuge Road,<br />Peliyagoda, Sri Lanka
              </p>
              <p className="mt-2 text-sm">
                <span className="text-orange-400">Hotline:</span> 011 426 5020
              </p>
            </div>

            <p className="text-xs text-slate-400">
              Business hours support available for sales, service, and dealer
              coordination.
            </p>
          </motion.div>
{/* Right side: WhatsApp + Email animated cards */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6 }}
  className="space-y-4"
>
  {/* WhatsApp card */}
  <motion.a
    href="https://wa.me/94XXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center gap-4 rounded-2xl border border-emerald-500/50 bg-gradient-to-r from-emerald-600/25 to-emerald-400/10 p-4 shadow-[0_0_25px_rgba(16,185,129,0.6)] cursor-pointer"
  >
    <motion.div
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500"
    >
      <span className="text-2xl"></span>
      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-300/70 blur-[1px]" />
    </motion.div>

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
        WhatsApp
      </p>
      <p className="text-sm font-semibold text-slate-50">
      Chat with Ceylon Dubhe

      </p>
      <p className="text-xs text-slate-300">
       Quick support for product availability, pricing, dealer inquiries, and urgent assistance.
      </p>
    </div>
  </motion.a>

  {/* Email card */}
  <motion.a
    href="mailto:your-email@example.com"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center gap-4 rounded-2xl border border-cyan-500/50 bg-gradient-to-r from-cyan-600/25 to-cyan-400/10 p-4 shadow-[0_0_25px_rgba(8,145,178,0.65)] cursor-pointer"
  >
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 border border-cyan-400"
    >
      <div className="h-6 w-8 border border-cyan-300 rounded-sm relative">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-full border-t border-cyan-300 [clip-path:polygon(0_0,50%_55%,100%_0)]" />
        </div>
      </div>
    </motion.div>

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
        Email
      </p>
      <p className="text-sm font-semibold text-slate-50">
        Send us an email
      </p>
      <p className="text-xs text-slate-300">
       Best for detailed inquiries, quotations, dealer partnerships, and official correspondence.

      </p>
    </div>
  </motion.a>
</motion.div>

        </div>
      </div>
      
    </section>
    
  );
};

export default ContactSection;
