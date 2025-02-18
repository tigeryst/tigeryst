import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <ul className={styles["footer-nav"]}>
        <li className={styles["footer-nav__item"]}>
          <Link href="#projects" className={styles["footer-nav__link"]}>
            Projects
          </Link>
        </li>
        <li className={styles["footer-nav__item"]}>
          <Link href="#blogs" className={styles["footer-nav__link"]}>
            Blogs
          </Link>
        </li>
        <li className={styles["footer-nav__item"]}>
          <Link href="#interests" className={styles["footer-nav__link"]}>
            Interests
          </Link>
        </li>
      </ul>

      <p>Bangkok, Thailand</p>
      <p>Tiger Yotsawat</p>
      <ul className="footer__actions flex-row">
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

      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/tigeryst" className="social-list__link">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="social-list__link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.instagram.com/tiger.y"
            className="social-list__link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.facebook.com/tiger.yotsawat"
            className="social-list__link"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>

      <p>
        Portfolio site created using NextJS with icons from Font Awesome and
        images from Unsplash
      </p>
      <p>Copyright &copy; 2021</p>
    </footer>
  );
}
