import './App.css';
import Header from "./components/sections/Header";
import Particles from "./components/sections/Particles";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";


function App() {
  return (
    <div>
      <Header />
      <Particles />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
