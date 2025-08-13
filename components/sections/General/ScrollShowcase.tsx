"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase({
  project,
}: {
  project: { title: string; para: string; src: string; gif: string };
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const img = imgRef.current;
    const section = sectionRef.current;

    gsap.set(img, { y: () => -section!.offsetHeight });

    gsap.to(img, {
      y: () => section!.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // recalc on resize
        // markers: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="relative grid grid-cols-2 h-screen">
      {/* LEFT TEXT */}
      <div className="flex items-center">
        <div className="flex-1 p-10">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-300">{project.para}</p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden h-full w-full flex justify-center items-center">
        <div ref={imgRef} className="w-full h-full flex justify-center">
          <Image
            src={project.src}
            alt={project.title}
            width={800}
            height={600}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
