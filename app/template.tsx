"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR crash

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {}); // clean up
    };
  }, []);

  return (
    <>
      <header></header>
      <main className=" relative">{children}</main>
      <footer></footer>
    </>
  );
}
