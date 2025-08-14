"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import ScrollShowcase from "../General/ScrollShowcase";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainHeading = useRef<HTMLHeadingElement | null>(null);
  const mainSection = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.to(mainHeading.current, {
      filter: "blur(10px)",
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: mainSection.current,
        scrub: true,
        start: "top 30%",
        end: "bottom center",
      },
    });
  }, {});

  const projects = [
    {
      id: 1,
      title: "Hello World",
      para: "hellow world is just a placeholder",
      src: "/portfolio-projects/aviorsol-thumbnail.jpg",
      gif: "/portfolio-projects/aviorsol-thumbnail.jpg",
    },
    {
      id: 2,
      title: "Hello World 2",
      para: "hellow world is just a placeholder",
      src: "/portfolio-projects/sartx-thumbnail.jpg",
      gif: "/portfolio-projects/sartx-thumbnail.jpg",
    },
    {
      id: 3,
      title: "Hello World 3",
      para: "hellow world is just a placeholder",
      src: "/portfolio-projects/scintillapro-thumbnail.jpg",
      gif: "/portfolio-projects/scintillapro-thumbnail.jpg",
    },
  ];

  return (
    <section ref={mainSection} className=" relative isolate min-h-screen py-5">
      <h2
        // ref={mainHeading}
        className="text-9xl text-center "
      >
        Work
      </h2>
      <div className="container mt-10">
        {projects.map((item, index) => (
          <ScrollShowcase
            project={item}
            key={index + 1}
            i={index}
            projects={projects}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
