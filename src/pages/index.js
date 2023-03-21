import Head from "next/head";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Experience from "@/Components/Experience";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
export default function App() {
  return (
    <div className="flex items-center justify-center w-full  flex-col ">
      <Head>
        <title>Vamsi Madugundu</title>
      </Head>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
