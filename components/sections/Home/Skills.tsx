"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.from(containerRef.current, {
      translateY: "-220px",
      scale: 0.9,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  }, {});

  return (
    <section ref={mainRef} className="">
      <div
        ref={containerRef}
        className="container px-4 flex flex-col gap-4 mb-8"
      >
        <div className="grid grid-cols-2 items-center gap-8">
          <h2 className="text-xxl font-semibold">
            Professional Core Skills and Competencies
          </h2>
          <p className="text-lg font-medium">
            Proven results for every project, with a focus on design and
            functionality.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 rounded-2xl ">
          <div className="py-4 px-6 rounded-xl bg-white border-2 flex flex-col gap-2">
            <div className="relative isolate w-20 h-20">
              <div className="bg-card-foreground absolute top-0 left-0 w-20 h-20 p-3 rounded-full border-2 grid place-items-center">
                <Image
                  src={"/skills/html.png"}
                  alt={"Custom"}
                  width={80}
                  height={90}
                />
              </div>
            </div>
            <h6 className="text-md font-medium">HTML/CSS/JS</h6>
            <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link>
          </div>
          <div className="py-4 px-6 rounded-xl bg-white border-2 flex flex-col gap-2">
            <div className="relative isolate w-20 h-20">
              <div className="bg-card-foreground absolute top-0 left-0 w-20 h-20 p-3 rounded-full border-2 grid place-items-center">
                <Image
                  src={"/skills/react.png"}
                  alt={"Custom"}
                  width={80}
                  height={90}
                />
              </div>
              <div className="bg-card-foreground absolute top-0 left-10 w-20 h-20 p-5 rounded-full border-2 grid place-items-center">
                <Image
                  src={"/skills/nextjs.png"}
                  alt={"Custom"}
                  width={80}
                  height={90}
                />
              </div>
            </div>
            <h6 className="text-md font-medium">React.js / Next.js</h6>
            <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link>
          </div>
          <div className="py-4 px-6 rounded-xl bg-white border-2 flex flex-col gap-2">
            <div className="relative isolate w-20 h-20">
              <div className="bg-card-foreground absolute top-0 left-0 w-20 h-20 p-3 rounded-full border-2 grid place-items-center">
                <Image
                  src={"/skills/wordpress.png"}
                  alt={"Custom"}
                  width={80}
                  height={90}
                />
              </div>
            </div>
            <h6 className="text-md font-medium">Wordpress</h6>
            <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link>
          </div>
          <div className="py-4 px-6 rounded-xl bg-white border-2 flex flex-col gap-2">
            <div className="relative isolate w-20 h-20">
              <div className="bg-card-foreground absolute top-0 left-0 w-20 h-20 p-3 rounded-full border-2 grid place-items-center">
                <Image
                  src={"/skills/asp.png"}
                  alt={"Custom"}
                  width={80}
                  height={90}
                />
              </div>
            </div>
            <h6 className="text-md font-medium">DotNet MVC</h6>
            <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="container  px-6 grid grid-cols-2">
          <div className="border-r border-l py-4 pl-4">
            <h6 className="text-md">Frontend Styling & UI Libraries</h6>
            <ul className="text-sm">
              <li>Tailwind CSS</li>
              <li>Shadcn</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
              <li>Emotion</li>
            </ul>
          </div>
          <div className="border-r py-4 pl-4">
            <h6 className="text-md">Animation Libraries</h6>
            <ul className="text-sm">
              <li>GSAP</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container  px-6 grid grid-cols-2">
          <div className="border-r border-l py-4 pl-4">
            <h6 className="text-md">Frontend State Management & Logic</h6>
            <ul className="text-sm">
              <li>Redux</li>
              <li>Jotai</li>
            </ul>
          </div>
          <div className="border-r py-4 pl-4">
            <h6 className="text-md">Programming Languages & Core Web Tech</h6>
            <ul className="text-sm">
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border">
        <div className="container  px-6 grid grid-cols-2">
          <div className="border-r border-l py-4 pl-4">
            <h6 className="text-md">Version Control & Collaboration</h6>
            <ul className="text-sm">
              <li>GitHub</li>
              <li>Bitbucket</li>
            </ul>
          </div>
          <div className="border-r py-4 pl-4">
            <h6 className="text-md">DevOps & Deployment</h6>
            <ul className="text-sm">
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-b">
        <div className="container  px-6 grid grid-cols-2">
          <div className="border-r border-l py-4 pl-4">
            <h6 className="text-md">Backend & Database</h6>
            <ul className="text-sm">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="border-r py-4 pl-4">
            <h6 className="text-md">Cloud & Backend Services</h6>
            <ul className="text-sm">
              <li>Firebase</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
