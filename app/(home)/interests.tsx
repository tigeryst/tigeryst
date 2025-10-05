import Link from "next/link";
import styles from "./interests.module.css";

export default function Interests() {
  return (
    <section
      className="flow | text-neutral-100 bg-neutral-900 text-center"
      id="interests"
    >
      <h2 className="section-title" data-accent>
        Interests
      </h2>
      <p className="section-subtitle">What I Love</p>

      <div className={styles["interests"]}>
        <article className={`flow ${styles["interest"]}`} data-theme="cooking">
          <h3 className="text-neutral-100">Cooking</h3>
          <p>
            What best to do after a rushed day of work than to put on some chill
            cooking beats and fill the room with savoury aroma. Follow along to
            see things I&apos;ve been cooking.
          </p>
          <Link href="" className="button" data-variant="primary">
            Learn more
          </Link>
        </article>

        <article className={`flow ${styles["interest"]}`} data-theme="art">
          <h3 className="text-neutral-100">Art</h3>
          <p>
            To remain creative, to test new boundaries and constantly try out
            new techniques is what I learn from painting with watercolours. Here
            are some of my creations.
          </p>
          <Link href="" className="button" data-variant="primary">
            Learn more
          </Link>
        </article>

        <article className={`flow ${styles["interest"]}`} data-theme="travel">
          <h3 className="text-neutral-100">Travel</h3>
          <p>
            Explore new horizons, try out new food and learn about different
            cultures. See where I&apos;ve been.
          </p>
          <Link href="" className="button" data-variant="primary">
            Learn more
          </Link>
        </article>

        <article className={`flow ${styles["interest"]}`} data-theme="reading">
          <h3 className="text-neutral-100">Reading</h3>
          <p>
            Quiet time with a book is where I feel most like myself. Look here
            for my reading list.
          </p>
          <Link href="" className="button" data-variant="primary">
            Learn more
          </Link>
        </article>

        <article className={`flow ${styles["interest"]}`} data-theme="running">
          <h3 className="text-neutral-100">Running</h3>
          <p>
            Why would anyone tire themselves out for no reason? Well I guess
            because people say it relieves stress? Learn about why I run.
          </p>
          <Link href="" className="button" data-variant="primary">
            Learn more
          </Link>
        </article>
      </div>
    </section>
  );
}
