"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  const subSkills = [
    {
      icon: "",
      title: "Frontend UI Libraries",
      libs: ["Tailwind CSS", "Shadcn", "Material UI", "Bootstrap", "Emotion"],
    },
    {
      icon: "",
      title: "Animation Libraries",
      libs: ["GSAP", "Framer Motion"],
    },
    {
      icon: "",
      title: "State Management",
      libs: ["Redux", "Jotai"],
    },
    {
      icon: "",
      title: "Core Web Tech",
      libs: ["TypeScript", "JavaScript"],
    },
    {
      icon: "",
      title: "Version Control",
      libs: ["GitHub", "Bitbucket"],
    },
    {
      icon: "",
      title: "DevOps & Deployment",
      libs: ["GitHub Actions", "Docker"],
    },
    {
      icon: "",
      title: "Backend & Database",
      libs: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      icon: "",
      title: "Cloud & Backend Services",
      libs: ["Firebase", "Supabase"],
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const mainHeading = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      translateY: "-230px",
      scale: 0.9,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    // const splittedHeading = new SplitText(mainHeading.current, {
    //   type: "words",
    // });
    // let headingWords = splittedHeading.words;

    // gsap.from(headingWords, {
    //   yPercent: 200,
    //   stagger: 0.05,
    //   // ease: "back.out",
    //   duration: 0.65,
    //   scrollTrigger: {
    //     trigger: mainHeading.current,
    //     // toggleActions: "restart none none reset",
    //     start: "top center",
    //     end: "bottom bottom",
    //     markers: true,
    //   },
    // });
  }, {});

  return (
    <section ref={mainRef} className="">
      <div
        ref={containerRef}
        className="container px-4 flex flex-col gap-4 mb-8"
      >
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="overflow-hidden">
            <h2 className="text-xxl font-semibold ">
              Professional Core Skills and Competencies
            </h2>
          </div>
          <p className="text-lg font-medium">
            Proven results for every project, with a focus on design and
            functionality.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 rounded-2xl ">
          <div className="py-4 px-6 rounded-xl bg-white border flex flex-col gap-2">
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
            {/* <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link> */}
          </div>
          <div className="py-4 px-6 rounded-xl bg-white border flex flex-col gap-2">
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
            {/* <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link> */}
          </div>
          <div className="py-4 px-6 rounded-xl bg-white border flex flex-col gap-2">
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
            {/* <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link> */}
          </div>
          <div className="py-4 px-6 rounded-xl bg-white border flex flex-col gap-2">
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
            {/* <Link
              href={""}
              className="hover:[&>svg]:rotate-0 [&>svg]:-rotate-45 [&>svg]:transition-all flex  items-center gap-12 text-base w-fit relative"
            >
              Contact <FaArrowRight />
              <div className="w-full h-[0.0625rem] bg-black bottom-0 left-0 absolute" />
            </Link> */}
          </div>
        </div>
        <div className="grid grid-cols-4 col-gap-4 rounded-2xl bg-white  border overflow-hidden ">
          {subSkills.map((item, index) => (
            <div
              key={index + 1}
              className={`p-8 flex flex-col justify-between gap-2 h-48  ${
                index == 3 || index == 7 ? "" : "border-r"
              } ${index > 3 ? "border-t" : ""}`}
            >
              <h6 className="text-md font-medium">{item.title}</h6>
              <ul className="flex items-center justify-start gap-2 flex-wrap">
                {item.libs.map((lib, libIndex) => (
                  <li
                    key={libIndex + lib}
                    className="bg-card-foreground px-3 py-1 rounded-[8px] border text-amber-50 "
                  >
                    {lib}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
