import { useState } from "react";
import About from "./components/About";
import Social from "./components/Social";
import MyExperince from "./components/Experience";
import FloatingBar from "./components/Floating-bar";
import GithubCalander from "./components/github-calander";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TypeWritter from "./components/TypeWritter";
import "./index.css";
import Terminal from "./components/Term";
import Contact from "./components/Contact";



export function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTerminalClick = () => {
    setShowTerminal(!showTerminal);
  }
  return (
    <div className="h-full w-screen  mt-10 flex justify-center relative">
      <div className=" h-full w-full px-4 md:w-[50%] md:px-0 space-y-10 md:space-y-14 mb-10">
      <TypeWritter text="Hi, I'm Gopal"/>
      <GithubCalander />
      <About />
      <Social />
      <MyExperince />
      <Skills />
      <Projects />
      <Contact />
      <FloatingBar onclick={handleTerminalClick} />
      {showTerminal && <Terminal onclick={handleTerminalClick} />}
      </div>
    </div>
  );
}

export default App;
