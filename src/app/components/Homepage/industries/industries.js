import styles from "./industries.module.css";
import Image from "next/image";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { HiCircleStack } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";
import { BsFileBarGraphFill } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import { FaHardDrive } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import { FcFlowChart } from "react-icons/fc";
const Industries = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.heading}>
          <h2 className={styles.title}>WHAT WE DO?</h2>
          <p className={styles.subtitle}>
            A technology partner that owns the entire digital journey.
          </p>
        </div>
        <div className={styles.firstRow}>
          <div className={styles.card1}>
            <div className={styles.card1Text}>
              <div className={`${styles.cardheading} ${styles.cardheading1}`}>UI/UX</div>
              <div className={styles.cardcontent}>
                We design intuitive, user-focused interfaces that make complex
                systems simple and easy to navigate. From user journeys to
                polished interfaces.
              </div>
            </div>

            <div className={styles.imageStack}>
              <div className={styles.cardBackWrap}>
                <Image
                  src="/ui_ux/card1_laptop.webp"
                  alt=""
                  fill
                  sizes="600px"
                  className={styles.cardBack}
                />
              </div>
              <div className={styles.cardMiddleWrap}>
                <Image
                  src="/ui_ux/card1_tablet.webp"
                  alt="" 
                  fill
                  sizes="300px"
                  className={styles.cardMiddle}
                />
              </div>
              <div className={styles.cardFrontWrap}>
                <Image
                  src="/ui_ux/card1_mobile.webp"
                  alt=""
                  fill
                  sizes="100px"
                  className={styles.cardFront}
                />
              </div>
            </div>
          </div>

          <div className={styles.card2}>
            <div className={`${styles.cardheading} ${styles.cardheading2}`}>API Integration</div>
            <div className={styles.cardcontent2}>
              Connect your applications, platforms, and third-party services
              through secure and reliable API integrations.
            </div>
            <div className={styles.card2display}>
              <div className={styles.orbit}>
                {/* Fixed hub - lives outside the rotating ring so "API" never spins */}
                <div className={styles.centerlogo}>API</div>

                {/*
                  Everything that should physically travel around the
                  circle - the spokes and the icon bubbles - lives inside
                  this one rotating wrapper. Its positions (pos1..pos6)
                  stay fixed relative to IT, so as it spins they sweep
                  around the center like points on a wheel.
                */}
                <div className={styles.orbitRing}>
                  <svg
                    className={styles.orbitLines}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="100" y1="100" x2="100" y2="19" />
                    <line x1="100" y1="100" x2="170.2" y2="59.5" />
                    <line x1="100" y1="100" x2="170.2" y2="140.5" />
                    <line x1="100" y1="100" x2="100" y2="181" />
                    <line x1="100" y1="100" x2="29.8" y2="140.5" />
                    <line x1="100" y1="100" x2="29.8" y2="59.5" />
                  </svg>
                  <div className={`${styles.orbitIcon} ${styles.pos1}`}>
                    <span className={styles.orbitIconInner}>
                      <IoGameControllerOutline />
                    </span>
                  </div>
                  <div className={`${styles.orbitIcon} ${styles.pos2}`}>
                    <span className={styles.orbitIconInner}>
                      <FaCar />
                    </span>
                  </div>
                  <div className={`${styles.orbitIcon} ${styles.pos3}`}>
                    <span className={styles.orbitIconInner}>
                      <GiCommercialAirplane />
                    </span>
                  </div>
                  <div className={`${styles.orbitIcon} ${styles.pos4}`}>
                    <span className={styles.orbitIconInner}>
                      <FaWifi />
                    </span>
                  </div>
                  <div className={`${styles.orbitIcon} ${styles.pos5}`}>
                    <span className={styles.orbitIconInner}>
                      <IoBagAdd />
                    </span>
                  </div>
                  <div className={`${styles.orbitIcon} ${styles.pos6}`}>
                    <span className={styles.orbitIconInner}>
                      <IoSettings />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.card3}>
            <div className={styles.card3Text}>
              <div className={`${styles.cardheading} ${styles.cardheading3}`}>Custom Web App</div>
              <div className={styles.cardcontent2}>
                Build custom web applications tailored to your unique business
                processes, workflows, and requirements.
              </div>
            </div>
            <div className={styles.card3ImageWrap}>
              <div className={styles.card3VideoFrame}>
                <video
                  className={styles.card3Video}
                  src="/webapp/web_dev.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
          <div className={styles.card4}>
            <div className={`${styles.cardheading} ${styles.cardheading4}`}>Andriod Application</div>
            <div className={styles.cardcontent4}>
              From customer-facing apps to powerful business solutions, we
              create scalable mobile experiences that perform reliably across
              devices.
            </div>
            <div className={styles.card4VideoWrap}>
              <div className={styles.card4VideoFrame}>
                <video
                  className={styles.card4Video}
                  src="/android/and_vid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.card5}>
            <div className={`${styles.cardheading} ${styles.cardheading5}`}>Data Migration</div>
            <div className={styles.cardcontent5}>
              Migrate your business data between systems with accuracy, minimal
              disruption, and a clear transition process.
            </div>
            <div className={styles.card5display}>
              <div className={styles.migrationDiagram}>
                <div className={`${styles.dbCircle} ${styles.dbCircleLeft}`}>
                  <HiCircleStack />
                </div>
                <div className={`${styles.dbCircle} ${styles.dbCircleRight}`}>
                  <HiCircleStack />
                </div>

                {/*
                  Drawn AFTER the circles on purpose: earlier the arrowhead
                  landed right at the circle's position and the circle
                  (later in the DOM) painted over it, hiding the tip. Now
                  the arrows paint on top of the circles instead, so the
                  arrowhead stays visible right up to the circle's edge.
                */}
                <svg
                  className={styles.migrationArrows}
                  viewBox="0 0 400 160"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <marker
                      id="migrationArrowHead"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8 Z" />
                    </marker>
                  </defs>
                  <path
                    id="topArrowPath"
                    d="M43,80 Q200,18 357,72"
                    markerEnd="url(#migrationArrowHead)"
                  />
                  <path
                    id="bottomArrowPath"
                    d="M43,80 Q200,142 357,88"
                    markerEnd="url(#migrationArrowHead)"
                  />

                  {/*
                    Each icon travels the curve itself via animateMotion
                    (mpath ties it directly to the path above, so it stays
                    correct even if the curve's "d" ever changes). The
                    paired <animate> fades opacity 0 -> 1 -> 1 -> 0 on the
                    SAME timeline, so each icon fades IN right as it leaves
                    the left HiCircleStack and fades OUT right as it
                    reaches the right one, instead of popping in/out. Three
                    icons per arrow, started 3s apart on a 9s loop, keeps
                    the flow continuous - something is always mid-flight.
                  */}
                  <g className={styles.flowIcon}>
                    <foreignObject width="28" height="28" x="-14" y="-14">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className={styles.migrationFlowIconInner}
                      >
                        <IoMailOpenOutline />
                      </div>
                    </foreignObject>
                    <animateMotion dur="9s" begin="0s" repeatCount="indefinite">
                      <mpath xlinkHref="#topArrowPath" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur="9s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </g>
                  <g className={styles.flowIcon}>
                    <foreignObject width="28" height="28" x="-14" y="-14">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className={styles.migrationFlowIconInner}
                      >
                        <BsFileBarGraphFill />
                      </div>
                    </foreignObject>
                    <animateMotion dur="9s" begin="3s" repeatCount="indefinite">
                      <mpath xlinkHref="#topArrowPath" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur="9s"
                      begin="3s"
                      repeatCount="indefinite"
                    />
                  </g>
                  <g className={styles.flowIcon}>
                    <foreignObject width="28" height="28" x="-14" y="-14">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className={styles.migrationFlowIconInner}
                      >
                        <GiBookmarklet />
                      </div>
                    </foreignObject>
                    <animateMotion dur="9s" begin="6s" repeatCount="indefinite">
                      <mpath xlinkHref="#topArrowPath" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur="9s"
                      begin="6s"
                      repeatCount="indefinite"
                    />
                  </g>

                  <g className={styles.flowIcon}>
                    <foreignObject width="28" height="28" x="-14" y="-14">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className={styles.migrationFlowIconInner}
                      >
                        <FaHardDrive />
                      </div>
                    </foreignObject>
                    <animateMotion dur="9s" begin="0s" repeatCount="indefinite">
                      <mpath xlinkHref="#bottomArrowPath" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur="9s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </g>
                  <g className={styles.flowIcon}>
                    <foreignObject width="28" height="28" x="-14" y="-14">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className={styles.migrationFlowIconInner}
                      >
                        <MdSettings />
                      </div>
                    </foreignObject>
                    <animateMotion dur="9s" begin="3s" repeatCount="indefinite">
                      <mpath xlinkHref="#bottomArrowPath" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur="9s"
                      begin="3s"
                      repeatCount="indefinite"
                    />
                  </g>
                  <g className={styles.flowIcon}>
                    <foreignObject width="28" height="28" x="-14" y="-14">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className={styles.migrationFlowIconInner}
                      >
                        <FcFlowChart />
                      </div>
                    </foreignObject>
                    <animateMotion dur="9s" begin="6s" repeatCount="indefinite">
                      <mpath xlinkHref="#bottomArrowPath" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur="9s"
                      begin="6s"
                      repeatCount="indefinite"
                    />
                  </g>
                </svg>

                <div className={styles.migrationLabel}>DATA MIGRATION</div>
              </div>
            </div>
          </div>
          <div className={styles.card6}>
            <div className={`${styles.cardheading} ${styles.cardheading6}`}>Data Analytics</div>
            <div className={styles.cardcontent6}>
              We turn raw business data into clear, actionable insights that
              help you understand performance and make better decisions.
            </div>
            <div className={styles.card6VideoWrap}>
              <video
                className={styles.card6Video}
                src="/data_analytics/mainpage.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;