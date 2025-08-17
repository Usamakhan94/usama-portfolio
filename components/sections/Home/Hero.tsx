"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
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
    <section className="p-2 relative h-screen z-50 origin-center perspective-dramatic">
      <div
        ref={shiftingContainer}
        className=" relative w-full h-full bg-foreground rounded-3xl flex justify-start items-end overflow-hidden"
      >
        <h5 className="text-white text-8xl"></h5>
        <div className="absolute left-1/2 bottom-0 w-[26.25rem] -translate-x-1/2">
          {/* <Image
            src={"/my-pic.png"}
            alt={"Me"}
            width={600}
            height={1123}
            className="object-contain w-full h-full"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
