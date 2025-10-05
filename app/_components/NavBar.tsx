"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logoImg from "@/public/logo.png";
import styles from "./NavBar.module.css";

type Links = {
  [key: string]: string;
};

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  const handleHamburgerClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: Links = {
    Home: "#home",
    Projects: "#projects",
    Blogs: "#blogs",
    Interests: "#interests",
    About: "#about",
  };

  return (
    <nav
      className={`${styles["nav"]} | text-neutral-100 bg-neutral-900`}
      data-expanded={!isCollapsed}
      data-scrolled={isScrolled}
    >
      {/* Home */}
      <Link href="/">
        <Image
          className="max-w-[30px]"
          src={logoImg}
          alt="Logo: white TY on a black background"
        />
      </Link>

      {/* Links */}
      <div className={styles["menu"]}>
        <ul className={styles["list"]}>
          {Object.keys(links).map((name) => (
            <li key={name} className={styles["item"]}>
              <Link
                href={links[name]}
                className={styles["link"]}
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/*  Hamburger */}
      <button
        className={styles["toggle"]}
        onClick={handleHamburgerClick}
        aria-label="toggle navigation"
      >
        <span className={styles["hamburger"]}></span>
      </button>
    </nav>
  );
}
