import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center flow | bg-neutral-900 text-neutral-100 text-center py-5 px-3">
      {/* Links */}
      <ul className="flex justify-center | list-none m-0 p-0 gap-8">
        <li>
          <Link href="#projects" className="no-underline hover:opacity-70">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#blogs" className="no-underline hover:opacity-70">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="#interests" className="no-underline hover:opacity-70">
            Interests
          </Link>
        </li>
      </ul>

      {/* Contact info */}
      <p>Bangkok, Thailand</p>
      <p>Tiger Yotsawat</p>
      {/* Call to action */}
      <ul className="flex | gap-8 list-none w-max p-0 m-0">
        <li>
          <a href="/cv.pdf" className="button" data-variant="primary" download>
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

      {/* Social links */}
      <ul className="flex justify-center | list-none m-0 p-0 gap-8 text-2xl">
        <li>
          <a
            href="https://github.com/tigeryst"
            className="no-underline hover:opacity-70"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tigeryotsawat"
            className="no-underline hover:opacity-70"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tiger.y"
            className="no-underline hover:opacity-70"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/tiger.yotsawat"
            className="no-underline hover:opacity-70"
          >
            <FaFacebook />
          </a>
        </li>
      </ul>

      {/* Copyright info */}
      <p>
        Portfolio site created using NextJS with icons from React Icons and
        images from Unsplash
      </p>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
