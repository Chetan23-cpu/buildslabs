"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./what_we_do.module.css";

const projects = [
  {
    tag: "Professional Services",
    image: "/what_we_do/crm.webp",
    logo: "/projects/logo1.png",
    name: "CRM / Client Portals",
    description:
      "A powerful CRM platform that helps businesses manage customer relationships, streamline sales, and keep their teams connected. We built a clean, intuitive interface with smooth GSAP animations.",
    url: "#",
    bgColor: "#E0F3FF",
  },
  {
    tag: "Logistics",
    image: "/what_we_do/inventory.webp",
    logo: "/projects/logo1.png",
    name: "Fleet / Shipment management",
    description:
      "A centralized platform for managing inventory, assets, locations, users, and requests. We built an intuitive system that helps businesses track assets efficiently and streamline their day-to-day operations.",
    url: "#",
    bgColor: "#F2FBE6",
  },
  {
    tag: "Healthtech",
    image: "/what_we_do/healthtech.webp",
    logo: "/projects/logo3.png",
    name: "Innovative Health Tech Solutions",
    description:
      "Dawn is a 24/7 AI companion for real-time, evidence-based support. We built their engaging, animated site with GSAP.",
    url: "#",
    bgColor: "#D1C78D",
  },
  {
    tag: "Fintech",
    image: "/what_we_do/fintech.webp",
    logo: "/projects/logo4.png",
    name: "Financial Platforms / Payment Solutions",
    description:
      "We build secure, scalable web applications for fintech companies, including payment platforms, financial dashboards, and digital banking solutions.",
    url: "#",
    bgColor: "#EFF0EF",
  },
  {
    tag: "E-commerce",
    image: "/what_we_do/ecommerce.webp",
    logo: "/projects/logo5.png",
    name: "E-commerce website and Admin panel",
    description:
      "A direct-to-consumer brand needing a fast, conversion-focused storefront. Shipped in two weeks.",
    url: "#",
    bgColor: "#FAEED3",
  },
  {
    tag: "Manufacturing",
    image: "/what_we_do/data_migration.webp",
    logo: "/projects/logo1.png",
    name: "Inventory / Production Systems",
    description:
      "We develop custom web solutions to manage inventory, production workflows, orders, suppliers, and operational data efficiently. Centralized dashboards provide real-time visibility into production, stock levels, and business performance.",
    url: "#",
    bgColor: "#BCA89F",
  },
  {
    tag: "Hospitality",
    image: "/what_we_do/data_analytics.webp",
    logo: "/projects/logo1.png",
    name: "Hotel management / Booking",
    description:
      "We build modern hotel websites and custom management solutions for online bookings, room availability, payments, guest management, housekeeping, billing, and day-to-day hotel operations—all from one seamless platform.",
    url: "#",
    bgColor: "#949F9E",
  },
  {
    tag: "Education & E-learning",
    image: "/what_we_do/android.webp",
    logo: "/projects/logo1.png",
    name: "Learning Platforms / Education Management",
    description:
      "Our solutions simplify learning, automate administration, and connect students, teachers, and institutions through one platform",
    url: "#",
    bgColor: "#FDF0CD",
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(projects.length - 1)) return "right";
    if (diff === -1 || diff === projects.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h2 className={styles.title}>INDUSTRIES WE SERVE</h2>
        <p className={styles.subtitle}>
          We turn ideas into digital solutions that drive growth.
        </p>
      </div>

      <div className={styles.carousel}>
        <div className={styles.track}>
          {projects.map((project, index) => {
            const position = getPosition(index);
            return (
              <div key={index} className={`${styles.card} ${styles[position]}`}>
                <span className={styles.tag}>{project.tag}</span>

                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className={styles.image}
                  />
                </div>

                <div
                  className={styles.cardBody}
                  style={{
    background: `linear-gradient(180deg, ${project.bgColor} 0%, #FFFFFF 100%)`
  }}
                >
                  <div className={styles.logoRow}>
                    {/* <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={28}
                      height={28}
                      className={styles.logo}
                    /> */}
                    <span className={styles.name}>{project.name}</span>
                  </div>

                  <p className={styles.description}>{project.description}</p>

                  {/* <div className={styles.divider}></div>

                  <a href={project.url} className={styles.visitLink}>
                    Visit website
                    <span className={styles.arrowIcon}>↗</span>
                  </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          onClick={goPrev}
          className={styles.navButton}
          aria-label="Previous project"
        >
          ←
        </button>
        <button
          onClick={goNext}
          className={styles.navButton}
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
