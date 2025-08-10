"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const shiftingContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(shiftingContainer.current, {
      rotateX: ".25deg",
      scale: 0.9,
      scrollTrigger: {
        trigger: shiftingContainer.current,
        scrub: true,
        start: "top top",
        end: "+=200% bottom",
      },
    });
  }, {});

  return (
    <section
      ref={shiftingContainer}
      className="p-2 relative h-screen z-50 origin-center perspective-dramatic"
    >
      <div className="  w-full h-full bg-foreground rounded-3xl flex justify-start items-end">
        <h5 className="text-white text-8xl"></h5>
      </div>
    </section>
  );
};

export default Hero;
