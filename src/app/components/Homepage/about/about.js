"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./about.module.css";

gsap.registerPlugin(ScrollTrigger);

// Each block that should type out in sequence, in order.
const segments = [
  { key: "label", tag: "span", className: "label", text: "About Us" },
  {
    key: "heading",
    tag: "h2",
    className: "heading",
    text: "Turning Ideas Into Technology That Works",
  },
  {
    key: "p1",
    tag: "p",
    className: "paragraph",
    text: "Every great digital product starts with a challenge — an idea that needs to be built, a process that needs to be simplified, or data that needs to make sense.",
  },
  {
    key: "emphasis",
    tag: "p",
    className: "paragraphEmphasis",
    text: "That's where we come in.",
  },
  {
    key: "p2",
    tag: "p",
    className: "paragraph",
    text: "We design and build digital solutions from the ground up — from UI/UX and modern websites to custom web and mobile applications, backend systems, APIs, data analytics, dashboards, and automation.",
  },
  {
    key: "p3",
    tag: "p",
    className: "paragraph",
    text: "We work across FinTech, HealthTech, E-commerce, CRM, and enterprise solutions, combining thoughtful design with solid engineering to create technology that is intuitive, reliable, and built to scale.",
  },
  {
    key: "closing",
    tag: "p",
    className: "closingLine",
    text: "You bring the challenge. We build the technology to solve it.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  // segmentRefs.current[i] holds an array of char <span> elements for segment i
  const segmentRefs = useRef(segments.map(() => []));

  useEffect(() => {
    // Start every character invisible - full text is already laid out,
    // so nothing shifts as characters reveal, even with centered text.
    segments.forEach((_, i) => {
      const spans = segmentRefs.current[i];
      if (spans.length) gsap.set(spans, { opacity: 0 });
    });

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });

    segments.forEach((segment, i) => {
      const spans = segmentRefs.current[i];
      if (!spans.length) return;
      const perCharDuration = Math.min(0.03, 2.5 / spans.length);

      tl.to(
        spans,
        {
          opacity: 1,
          duration: 0.01,
          stagger: perCharDuration,
          ease: "none",
        },
        i === 0 ? undefined : "+=0.08" // small pause between blocks
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.main} ref={sectionRef}>
      <Image
        src="/about/about.png"
        alt="About us"
        fill
        className={styles.image}
        priority
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        {segments.map((segment, i) => {
          const Tag = segment.tag;
          return (
            <Tag key={segment.key} className={styles[segment.className]}>
              {segment.text.split("").map((char, ci) => (
                <span
                  key={ci}
                  ref={(el) => {
                    segmentRefs.current[i][ci] = el;
                  }}
                >
                  {char}
                </span>
              ))}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default About;
