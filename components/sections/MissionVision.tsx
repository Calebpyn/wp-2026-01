"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

interface BlockProps {
  title: string;
  tagline: string;
  centered?: boolean;
}

function Block({
  title,
  tagline,
  centered = false,
}: BlockProps & { centered?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start text-left"}`}
    >
      <h3 className="font-inter text-nowrap font-semibold uppercase text-white text-4xl sm:text-5xl md:text-6xl leading-tighter">
        {title}
      </h3>
      <p className="font-inter font-normal sm:text-lg text-white text-base md:text-2xl leading-snug">
        {tagline}
      </p>
    </motion.div>
  );
}

export default function MissionVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section
      id="mission-vision"
      className="min-h-screen flex items-center bg-navy"
    >
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col gap-20"
      >
        {/* Mission + Vision — 2 cols on md+, stacked on mobile */}
        <div className="flex lg:flex-row flex-col lg:gap-40 gap-20">
          <Block
            title="Our Mission"
            tagline="To Spread the Gospel of Jesus Christ"
            centered
          />
          <Block
            title="Our Vision"
            tagline="To Bring People Into a Grace-Filled Relationship with God"
            centered
          />
        </div>

        {/* Priorities — centered, full width */}
        <Block
          title="Our Priorities"
          tagline="His Grace, His Presence, & His Body"
          centered
        />
      </motion.div>
    </section>
  );
}
