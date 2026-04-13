"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

const pastorImage = {
  src: "/images/whoweare/gallery-1.jpg",
  alt: "Pastor and family",
};

const communityImages = [
  { src: "/images/whoweare/gallery-2.jpg", alt: "Community worship" },
  { src: "/images/whoweare/gallery-3.jpg", alt: "Community fellowship" },
  { src: "/images/whoweare/gallery-4.jpg", alt: "Community service" },
  { src: "/images/whoweare/gallery-5.jpg", alt: "Community gathering" },
  { src: "/images/whoweare/gallery-6.jpg", alt: "Community outreach" },
  { src: "/images/whoweare/gallery-7.jpg", alt: "Community outreach" },
];

const mobileImages = [pastorImage, ...communityImages];

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy/10">
      <span className="font-inter text-xs text-navy/30 tracking-wide text-center px-2">
        Photo
        <br />
        coming soon
      </span>
    </div>
  );
}

// Reads slide width from the DOM so it works with any CSS slide size
function useCarousel(total: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideWidth = useCallback(() => {
    const el = ref.current;
    if (!el) return 0;
    const slide = el.children[0] as HTMLElement | undefined;
    return slide ? slide.offsetWidth + 16 : el.offsetWidth; // 16px = gap-4
  }, []);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / getSlideWidth()));
  }, [getSlideWidth]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollTo = useCallback(
    (index: number) => {
      const el = ref.current;
      if (!el) return;
      el.scrollTo({ left: getSlideWidth() * index, behavior: "smooth" });
    },
    [getSlideWidth],
  );

  return { ref, activeIndex, scrollTo, total };
}

function CarouselDots({
  total,
  activeIndex,
  scrollTo,
}: {
  total: number;
  activeIndex: number;
  scrollTo: (i: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2 mt-5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === activeIndex ? "bg-navy w-5" : "bg-navy/25 w-2"
          }`}
        />
      ))}
    </div>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  const mobileCarousel = useCarousel(mobileImages.length);
  const desktopCarousel = useCarousel(communityImages.length);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* ── MOBILE layout (hidden on lg+) ─────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="lg:hidden flex flex-col gap-6 px-6"
      >
        {/* Combined carousel: pastor first, then community photos */}
        <motion.div variants={fadeUp}>
          <div
            ref={mobileCarousel.ref}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4"
          >
            {mobileImages.map(({ src, alt }) => (
              <div key={src} className="flex-none w-[88%] snap-start">
                <div className="aspect-4/3 relative rounded-3xl overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
          <CarouselDots
            total={mobileCarousel.total}
            activeIndex={mobileCarousel.activeIndex}
            scrollTo={mobileCarousel.scrollTo}
          />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-inter font-bold text-5xl text-text leading-[1.05]"
        >
          Who we are
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-inter font-normal text-text/60 text-base leading-relaxed"
        >
          Church in The Community was founded to serve people, helping them
          access food, identification, benefits, and housing as they take steps
          toward rebuilding their lives. Today, our ministry has expanded to
          Mexico, where we continue to share the Gospel and reflect God's grace
          through service and community.
        </motion.p>
      </motion.div>

      {/* ── DESKTOP layout (hidden below lg) ──────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="hidden lg:flex flex-col gap-14"
      >
        {/* Row: fixed pastor photo (left) + title & text (right) — constrained */}
        <motion.div
          variants={stagger}
          className="max-w-6xl mx-auto px-6 w-full grid grid-cols-[45%_1fr] gap-14 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="aspect-4/3 relative rounded-3xl overflow-hidden"
          >
            <ImagePlaceholder />
            <Image
              src={pastorImage.src}
              alt={pastorImage.alt}
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            className="flex flex-col justify-between h-full p-2"
          >
            <motion.h2
              variants={fadeUp}
              className="font-inter font-bold text-7xl text-text leading-[1.05]"
            >
              Who we are
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-inter font-normal text-text/60 text-lg leading-relaxed"
            >
              Church in The Community was founded to serve people, helping them
              access food, identification, benefits, and housing as they take
              steps toward rebuilding their lives. Today, our ministry has
              expanded to Mexico, where we continue to share the Gospel and
              reflect God's grace through service and community.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Community carousel — full viewport width, fotos sangran a los bordes */}
        <motion.div variants={fadeUp}>
          <div
            ref={desktopCarousel.ref}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-14 px-12"
          >
            {communityImages.map(({ src, alt }) => (
              <div key={src} className="flex-none w-[32%] snap-start">
                <div className="aspect-4/3 relative rounded-3xl overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
