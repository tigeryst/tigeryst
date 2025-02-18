import Image from "next/image";
import Link from "next/link";
import spaceImg from "@/public/404.svg";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__text">
          Hi! Looks like you landed on a page that does not yet exist. It is
          highly likely that I am still working on the page (this site is a work
          in progress) or it is temporarily unavailable. Check your URL or{" "}
          <Link href="/" className="text-muted">
            click here
          </Link>{" "}
          to go home.
        </p>
      </div>

      <Image
        className="not-found__img"
        src={spaceImg}
        alt="an astronaut floating in a remote, undiscovered location"
      />
    </div>
  );
}
