import Image from "next/image";
import Link from "next/link";
import spaceImg from "@/public/404.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center | p-8 min-h-[50vh] | gap-8">
      <div className="text-center max-w-[600px]">
        <h1 className="text-accent-400 mb-4">Page Not Found</h1>
        <p className="text-neutral-400 leading-relaxed">
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
        className="max-w-[400px] w-full h-auto"
        src={spaceImg}
        alt="an astronaut floating in a remote, undiscovered location"
      />
    </div>
  );
}
