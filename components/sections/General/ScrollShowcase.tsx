"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase({
  project,
  i,
  projects,
}: {
  project: { title: string; para: string; src: string; gif: string };
  i: number;
  projects: (typeof project)[];
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const img = imgRef.current;
    const section = sectionRef.current;

    const sectionHeight = section!.offsetHeight;

    let fromY: number;
    let toY: number;
    let startPos: string;
    let endPos: string;

    if (i === 0) {
      fromY = 0;
      toY = sectionHeight;
      startPos = "top top";
      endPos = "bottom top";
    } else if (i === projects.length - 1) {
      fromY = -sectionHeight;
      toY = 0;
      startPos = "top bottom";
      endPos = "bottom bottom";
    } else {
      fromY = -sectionHeight;
      toY = sectionHeight;
      startPos = "top bottom";
      endPos = "bottom top";
    }

    gsap.set(img, { y: fromY });

    gsap.to(img, {
      y: toY,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: startPos,
        end: endPos,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, [i, projects.length]);

  return (
    <div ref={sectionRef} className="relative grid grid-cols-2 h-screen">
      <div className="flex items-center">
        <div className="flex-1 p-10">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="text-lg text-primary">{project.para}</p>
        </div>
      </div>
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
