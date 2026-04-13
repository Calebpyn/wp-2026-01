"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import PillButton from "@/components/ui/PillButton";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image — uncomment and replace src when asset is available */}
      <div className="absolute inset-0 bg-navy">
        <Image
          src="/images/hero/hero.jpg"
          alt="Church in the Community congregation in worship"
          fill
          className="object-cover object-center saturate-[1.3] brightness-[0.9]"
          priority
        />
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 100%, rgba(0,0,0,0.62) 75%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl mx-auto"
      >
        {/* Title */}
        <motion.div variants={item} className="mb-4">
          <span className="block font-inter  font-semibold tracking-tighter text-[2rem] md:text-[4.3rem] text-base lg:text-[6rem] text-white lg:-mb-20 md:-mb-16 -mb-8 -ml-9">
            Church in the
          </span>
          <h1 className="font-besley italic text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none text-white tracking-tight">
            Community
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="font-inter text-white font-semibold text-xl md:text-3xl lg:text-5xl tracking-tighter -mt-4 mb-10"
        >
          Every Sunday at 10am
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 w-[70%] sm:w-auto sm:justify-center"
        >
          <PillButton
            href="https://www.facebook.com/EDUCATEDIGNORANCE?mibextid=wwXIfr&mibextid=wwXIfr"
            target="_blank"
            variant="outline"
          >
            Join us Live
          </PillButton>
          <PillButton href="#generosity" variant="outline">
            Contribute
          </PillButton>
          <PillButton href="#visit-us" variant="outline">
            Visit Us
          </PillButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
