"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./tech.module.css"
import { FaPhp } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { FaMagento } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoLogoAndroid } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";

const logos = [
    { icon: <FaPhp />, alt: "PHP", color: "#777BB4", bg: "#060000" },
    { icon: <SiLaravel />, alt: "Laravel", color: "#FF2D20", bg: "#060000" },
    { icon: <FaMagento />, alt: "Magento", color: "#EE672F", bg: "#060000" },
    { icon: <FaNode />, alt: "Node.js", color: "#5FA04E", bg: "#060000" },
    { icon: <FaReact />, alt: "React", color: "#61DAFB", bg: "#060000" },
    { icon: <SiExpress />, alt: "Express", color: "#EE672F", bg: "#060000" },
    { icon: <SiNextdotjs />, alt: "Next.js", color: "#6C3BAA", bg: "#060000" },
    { icon: <IoLogoFigma />, alt: "Figma", color: "#F24E1E", bg: "#060000" },
    { icon: <FaHtml5 />, alt: "HTML5", color: "#E34F26", bg: "#060000" },
    { icon: <FaCss />, alt: "CSS3", color: "#1572B6", bg: "#060000" },
    { icon: <SiJavascript />, alt: "JavaScript", color: "#F7DF1E", bg: "#060000" },
    { icon: <FaBootstrap />, alt: "Bootstrap", color: "#7952B3", bg: "#060000" },
    { icon: <RiTailwindCssFill />, alt: "Tailwind CSS", color: "#06B6D4", bg: "#060000" },
    { icon: <SiMongodb />, alt: "MongoDB", color: "#47A248", bg: "#060000" },
    { icon: <SiMysql />, alt: "MySQL", color: "#4479A1", bg: "#060000" },
    { icon: <BiLogoPostgresql />, alt: "PostgreSQL", color: "#4169E1", bg: "#060000" },
    { icon: <FaAws />, alt: "AWS", color: "#FF9900", bg: "#060000" },
    { icon: <VscAzure />, alt: "Azure", color: "#0089D6", bg: "#060000" },
    { icon: <IoLogoAndroid />, alt: "Android", color: "#F2023D", bg: "#060000" },
    { icon: <FaAppStoreIos />, alt: "Android", color: "#01F0FF", bg: "#060000" },

]

const Tech = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Logos are rendered twice below, so animating exactly to -50%
        // makes the loop seamless (right-to-left continuous motion).
        const tween = gsap.to(track, {
            xPercent: -50,
            duration: 25,
            ease: "none",
            repeat: -1,
        });

        return () => {
            tween.kill();
        };
    }, []);

    return (
        <div className={styles.trustedFooter}>
            <span className={styles.trustedText}>
                Technologies We
                <br />
                Support
            </span>

            <div className={styles.marquee}>
                <div className={styles.marqueeTrack} ref={trackRef}>
                    {[...logos, ...logos].map((logo, i) => (
                        <span
                            key={i}
                            className={styles.marqueeLogo}
                            title={logo.alt}
                            aria-label={logo.alt}
                            style={{ color: logo.color, backgroundColor: logo.bg }}
                        >
                            {logo.icon}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tech;