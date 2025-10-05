import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export default function Projects() {
  return (
    <section
      className="flow | text-neutral-100 bg-neutral-900 text-center"
      id="projects"
    >
      <h2 className="section-title" data-accent>
        Projects
      </h2>
      <p className="section-subtitle">What I Do</p>

      <div className="flow-lg mb-5">
        <article className="flow">
          <h3>ERP Application</h3>

          <div className="flow">
            <p>
              This project was the first full stack web application that I built
              from scratch. The goal was to automate the main business processes
              for my family business using the skills that I had recently
              learned from Colt Steele&apos;s &lsquo;The Web Developer
              Bootcamp&rsquo; course on{" "}
              <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                Udemy
              </a>
              .
            </p>
          </div>
          <div className="flow">
            <h4>Learning Points</h4>
            <p>
              I constantly learned new skills, all of which I incorporated into
              this still-evolving project so I guess this learning points
              section will be quite long. During the year I spent maturing this
              project, I have grown noticeably, both as a developer and a
              problem solver.
            </p>

            <p>
              Apart from learning to use tools like React, webpack, Express and
              MongoDB and interacting with Google (and other providers&apos;)
              APIs, what I feel is really important in developing a robust
              application is the way you write code. I recently learned about
              functional programming and test driven development and these were
              game changers in allowing me to write more testable code that is
              easy to reason with.
            </p>
          </div>
          <div className="flow">
            <h4>Tech Stack</h4>
            <ul className="flex justify-center | gap-6 text-4xl list-none p-0">
              <li>
                <FaReact />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <SiMongodb />
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-2 | list-none p-0 sm:flex-row sm:justify-center">
            <li>
              <Link
                href="/projects"
                className="button"
                data-variant="secondary"
              >
                demo
              </Link>
            </li>
            <li>
              <Link href="/projects" className="button" data-variant="primary">
                read more
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/tigeryst"
                className="button"
                data-variant="secondary"
              >
                github
              </a>
            </li>
          </ul>
        </article>

        <article className="flow">
          <h3>Pablo App</h3>
          <div className="flow">
            <p>
              Pablo is a simple card game that my friends and I used to always
              play whenever we get together. Because the game can and does get
              really competitive, we thought it would be nice if we had a simple
              score-keeping app designed for Pablo so that we can focus on
              snatching cards from each other rather than worry about who is
              winning. This projected is what I decided to create to address
              that demand.
            </p>
            <p>
              Side note: I believe the game is actually called{" "}
              <a href="https://en.wikipedia.org/wiki/Cabo_(game)">Cabo</a>, a
              2010 memory card game by Melissa Limes and Mandy Henning but we
              learned the game during one drinking session and we must have all
              misheard the name and Pablo has stuck so I&apos;m going with the
              flow. Another reason for sticking with the name
              &lsquo;Pablo&rsquo; is that the rules of our version has diverged
              in odd ways from the original game so Pablo is now quite different
              from Cabo.
            </p>
          </div>
          <div className="flow">
            <h4>Learning Points</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flow">
            <h4>Tech Stack</h4>
            <ul className="flex justify-center | gap-6 text-4xl list-none p-0">
              <li>
                <FaReact />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <SiMongodb />
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-2 | list-none p-0 sm:flex-row sm:justify-center">
            <li>
              <Link
                href="/projects"
                className="button"
                data-variant="secondary"
              >
                demo
              </Link>
            </li>
            <li>
              <Link href="/projects" className="button" data-variant="primary">
                read more
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/tigeryst"
                className="button"
                data-variant="secondary"
              >
                github
              </a>
            </li>
          </ul>
        </article>

        <article className="flow">
          <h3>Yelp Camp</h3>
          <div className="flow">
            <p>
              Yelp Camp, dubbed the greatest web dev project ever, is part of
              Colt Steele&apos;s famous course on{" "}
              <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                Udemy
              </a>{" "}
              titled &lsquo;The Web Developer Bootcamp&rsquo;. This course
              kickstarted my web development skills and I would highly recommend
              it for anyone looking to build their own web application. Colt
              keeps adding new content and is not afraid to scrap old ones in
              favour of more up-to-date content. This is important as the tools
              used in web development can change pretty quickly.
            </p>
            <p>
              This project is built on top of the one taught in the course and I
              aim to keep adding cool gimmicks to the site as I learn new
              tricks.
            </p>
          </div>

          <div className="flow">
            <h4>Learning Points</h4>
            <p>
              This project taught me the basics of many important aspects of web
              development. This included the MVC structure, server-side
              rendering using EJS, quickly styling a webpage using Bootstrap,
              working with external APIs, writing simple scripts and simple
              authentication and authorisation.
            </p>
          </div>
          <div className="flow">
            <h4>Tech Stack</h4>
            <ul className="flex justify-center | gap-6 text-4xl list-none p-0">
              <li>
                <FaReact />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <SiMongodb />
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-2 | list-none p-0 sm:flex-row sm:justify-center">
            <li>
              <Link
                href="/projects"
                className="button"
                data-variant="secondary"
              >
                demo
              </Link>
            </li>
            <li>
              <Link href="/projects" className="button" data-variant="primary">
                read more
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/tigeryst"
                className="button"
                data-variant="secondary"
              >
                github
              </a>
            </li>
          </ul>
        </article>
      </div>

      <Link href="/projects" className="button" data-variant="primary">
        see more projects
      </Link>
    </section>
  );
}
