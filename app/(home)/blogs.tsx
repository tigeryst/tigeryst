import Link from "next/link";

export default function Blogs() {
  return (
    <section className="flow grid justify-item-center" id="blogs">
      <h2 className="section-title" data-accent>
        Blogs
      </h2>
      <p className="section-subtitle">Things I Think About</p>

      <div className={`mx-auto flow | mb-5 max-w-[600px] lg:max-w-[80%]`}>
        <article className="flow">
          <h3 className="ms-0">
            <Link href="/blogs/#" className="text-neutral-800 font-bold">
              Technology trends in 2022
            </Link>
          </h3>
          <time dateTime="2022-05-30" className="text-neutral-400 text-sm">
            May 30, 2022
          </time>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </article>

        <article className="flow">
          <h3 className="ms-0">
            <Link href="/blogs/#" className="text-neutral-800 font-bold">
              What I learned from investing
            </Link>
          </h3>
          <time dateTime="2022-01-01" className="text-neutral-400 text-sm">
            January 1, 2022
          </time>
          <p className="ms-0 text-neutral-400">
            Learning to invest is something that I found really challenging.
            With all the jargons to learn and all the noise and hype to filter
            out from genuine advice, it can be a tough maze to navigate for new
            investors. In this post, I hope to highlight key resources which I
            found really useful in learning the basics of investing and to share
            some of the learning points that I came across over the past year.
          </p>
        </article>

        <article className="flow">
          <h3 className="ms-0">
            <Link href="/blogs/#" className="text-neutral-800 font-bold">
              My web development journey
            </Link>
          </h3>
          <time dateTime="2021-12-30" className="text-neutral-400 text-sm">
            December 30, 2021
          </time>
          <p className="ms-0 text-neutral-400">
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
        </article>
      </div>

      <Link href="/blogs" className="button mx-auto" data-variant="primary">
        see more blogs
      </Link>
    </section>
  );
}
