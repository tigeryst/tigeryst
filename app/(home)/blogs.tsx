import Link from "next/link";
import styles from "./blogs.module.css";

export default function Blogs() {
  return (
    <section className="flow grid justify-item-center" id="blogs">
      <h2 className="text-center section__title section__title--accent">
        Blogs
      </h2>
      <p className="mx-auto text-center section__subtitle">
        Things I Think About
      </p>

      <div className={`${styles["blogs"]} mx-auto flow mb-5`}>
        <div className="blog flow">
          <Link href="/blogs/#" className="text-neutral-800 fw-bold">
            Technology trends in 2022
          </Link>
          <p className="blog__date">30, May 2022</p>
          <p className="blog__post"></p>
        </div>

        <div className="blog flow">
          <Link href="/blogs/#" className="text-neutral-800 fw-bold">
            What I learned from investing
          </Link>
          <p className="blog__date">01, Jan 2022</p>
          <p className="blog__post">
            Learning to invest is something that I found really challenging.
            With all the jargons to learn and all the noise and hype to filter
            out from genuine advice, it can be a tough maze to navigate for new
            investors. In this post, I hope to highlight key resources which I
            found really useful in learning the basics of investing and to share
            some of the learning points that I came across over the past year.
          </p>
        </div>

        <div className="blog flow">
          <Link href="/blogs/#" className="text-neutral-800 fw-bold">
            My web development journey
          </Link>
          <p className="blog__date">30, Dec 2021</p>
          <p className="blog__post">
            Web development is my favourite hobby. There is just so much to
            learn in this broad field, and with all the different web
            applications that we see and use on a day to day basis, we can all
            probably appreciate that the possibilities are endless. This blog is
            my attempt to record my journey from &ldquo;Wow, this website has
            such a smooth interface.&rdquo; to &ldquo;Hey, I can probably build
            something like this!&rdquo;. I hope that by sharing my experience
            learning web development, this would hint at possible footholds to
            people staring at this seemingly tall wall dividing the
            &lsquo;creators&rsquo; from the &lsquo;users&rsquo;, wondering how
            to scale it.
          </p>
        </div>
      </div>

      <Link href="/blogs" className="button button--primary mx-auto">
        see more blogs
      </Link>
    </section>
  );
}
