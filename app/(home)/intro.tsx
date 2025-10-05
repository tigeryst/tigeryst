import introImg from "@/public/me-intro.png";
import Image from "next/image";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section
      className={`${styles["section"]} grid justify-items-center | flow`}
      id="home"
    >
      <h1 className={`${styles["title"]} section-title`}>Tiger Yotsawat</h1>
      <ul className={styles["roles"]}>
        <li className={styles["role"]}>Computer Vision Scientist</li>
        <li className={styles["role"]}>Web Developer</li>
        <li className={styles["role"]}>Tech Entrepreneur</li>
      </ul>
      <Image
        src={introImg}
        alt="A picture of Tiger Yotsawat in a suit, smiling"
        className={styles["image"]}
      />
      <p className={styles["body"]}>
        I love watching people interact with new technology. The sense of
        marvel, the spark of imagination for what's possible, and the hope it
        inspires for the future is truly magical.
      </p>
      <ul className={`${styles["actions"]} flex-row`}>
        <li>
          <a
            href="/tiger-yotsawat-cv.pdf"
            className="button"
            data-variant="primary"
            download
          >
            Get My CV
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="button"
            data-variant="secondary"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </section>
  );
}
