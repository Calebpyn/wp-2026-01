"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const QR_METHODS = [
  { label: "Zelle", src: "/qr/zelle.jpg" },
  { label: "Cashapp", src: "/qr/cashapp.jpg" },
  { label: "Venmo", src: "/qr/venmo.jpg" },
] as const;

function QrPlaceholder() {
  return (
    <div className="w-full h-full border border-navy/20 rounded-md bg-navy/5 flex items-center justify-center">
      <span className="font-inter text-[9px] text-navy/30 leading-tight text-center">
        QR
        <br />
        soon
      </span>
    </div>
  );
}

export default function Generosity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="generosity"
      className="bg-white min-h-screen flex items-center"
    >
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center gap-12 text-center"
      >
        {/* Heading */}
        <motion.div variants={fadeUp}>
          <span className="block font-inter font-semibold tracking-tighter text-[1.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-navy lg:-mb-18 md:-mb-14 -mb-4 -ml-14">
            Thank you for your
          </span>
          <h2 className="font-besley italic text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none tracking-tight text-navy">
            Generosity
          </h2>
        </motion.div>

        {/* Verse */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-2 max-w-sm sm:max-w-xl"
        >
          <p className="font-inter font-semibold text-navy text-sm md:text-xl leading-relaxed uppercase">
            Philippians 4:17
            <br />
            Not that I seek the gift, but I seek the fruit that abounds to your
            account.
          </p>
        </motion.div>

        {/* QR codes */}
        <motion.div variants={stagger} className="w-full">
          {/* Mobile: 3-column grid — QR on top, label below */}
          <div className="grid grid-cols-3 gap-4 sm:hidden">
            {QR_METHODS.map(({ label, src }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center gap-2"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={src}
                    alt={`${label} QR code`}
                    fill
                    className="object-contain shadow-2xl"
                  />
                </div>
                <span className="font-inter font-bold text-navy text-sm">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Desktop: horizontal row — QR on left, label to the right */}
          <div className="hidden sm:flex items-center justify-center gap-14 md:gap-20">
            {QR_METHODS.map(({ label, src }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center md:gap-2 gap-1"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-none">
                  <Image
                    src={src}
                    alt={`${label} QR code`}
                    fill
                    className="object-contain shadow-2xl"
                  />
                </div>
                <span className="font-inter font-bold text-navy text-xl md:text-3xl">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
