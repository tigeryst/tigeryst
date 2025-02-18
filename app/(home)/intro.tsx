import introImg from "@/public/me-intro.png";
import Image from "next/image";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section
      className={`grid justify-items-center flow ${styles["intro"]}`}
      id="home"
    >
      <h1 className={`section__title ${styles["title"]}`}>Tiger Yotsawat</h1>
      <ul className={`fs-300 ${styles["roles"]}`}>
        <li className={styles["role"]}>Tech Enthusiast</li>
        <li className={styles["role"]}>ML Engineer</li>
        <li className={styles["role"]}>Web Developer</li>
      </ul>
      <Image
        src={introImg}
        alt="A picture of Tiger Yotsawat in a suit, smiling"
        className={styles["image"]}
      />
      <p className={styles["body"]}>
        &quot;Any technology sufficiently advanced enough is indistinguishable
        from magic.&quot; I&apos;m learning a little more everyday so that one
        day I might create my own little magic that would spark the creation of
        even more new magic.
      </p>
      <ul className={`${styles["actions"]} flex-row`}>
        <li>
          <a href="/cv.pdf" className="button button--primary" download>
            Get My CV
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="button button--secondary"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </section>
  );
}
