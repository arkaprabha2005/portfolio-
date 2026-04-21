import Hero from "./components/Hero";
import Work from "./components/Work";
import More from "./components/More";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";


export default function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Work />
      <More />
      <About/>
      <Contact/>
      <Cursor />
    </div>
  );
}