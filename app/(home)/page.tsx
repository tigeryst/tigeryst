import Intro from "./intro";
import Projects from "./projects";
import Blogs from "./blogs";
import Interests from "./interests";
import About from "./about";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Blogs />
      <Interests />
      <About />
    </>
  );
}
