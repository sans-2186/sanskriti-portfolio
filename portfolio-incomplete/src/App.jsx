import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

function App() {
  return (
    <div className="page-shell">
      {/* TODO: Render a hero section component here */}
      <Hero />
      <main className="main-stack">
        {/* TODO: Add an About section component here */}
        <About />
        {/* TODO: Add a Skills section component here */}
        <Skills />
        {/* TODO: Pass project data into the Projects component */}
        <Projects items={projects} />
      </main>
      {/* TODO: Render a footer component here */}
      <Footer />
    </div>
  );
}

export default App;
