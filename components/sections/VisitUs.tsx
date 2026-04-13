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

const MAPS_URL =
  "https://maps.google.com/?q=Carretera+Transpeninsular+KM+24.8+Cerro+Colorado+Los+Cabos+Mexico";

export default function VisitUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="visit-us" className="bg-sage min-h-screen flex items-center">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12"
      >
        {/* Title + subtitle — centered */}
        <div className="flex flex-col items-center text-center gap-5">
          <motion.h2
            variants={fadeUp}
            className="font-besley italic text-7xl sm:text-8xl md:text-[10rem] text-white leading-none mb-10"
          >
            Visit us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-inter font-bold tracking-tighter uppercase text-white text-sm md:text-3xl  leading-snug max-w-3xl"
          >
            Join us in worship at the Hampton Inn and Suites right next to the
            H+ Hospital!
          </motion.p>
        </div>

        {/* Photo (left) + Info (right) */}
        <motion.div
          variants={stagger}
          className="flex flex-col items-center md:grid md:grid-cols-2  md:gap-5 md:items-start"
        >
          {/* Hampton Inn photo */}
          <motion.div
            variants={fadeUp}
            className="w-[80%] aspect-4/3 relative rounded-3xl overflow-hidden shadow-2xl bg-white/10"
          >
            <Image
              src="/images/visitus/hampton.png"
              alt="Hampton Inn and Suites Los Cabos"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Info block */}
          <motion.div
            variants={stagger}
            className="flex flex-col items-center justify-between h-full py-10"
          >
            {/* Opening hours */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:gap-1 items-center md:items-start"
            >
              <span className="font-inter font-bold uppercase text-white text-lg md:text-2xl leading-snug">
                Opening Hours:
              </span>
              <span className="font-inter font-bold uppercase text-white text-lg md:text-2xl leading-snug">
                Every Sunday at 10am
              </span>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:gap-1 items-center md:items-start mt-5 md:mt-0"
            >
              <span className="font-inter uppercase text-white text-sm md:text-lg leading-relaxed  decoration-white/50 hover:decoration-white transition-all">
                Address:
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter uppercase text-center md:text-left text-white text-sm md:text-lg leading-relaxed underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all"
              >
                Carretera Transpeninsular, KM 24.8
                <br />
                Cerro Colorado, Los Cabos,
                <br />
                NS, 23400, México
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
