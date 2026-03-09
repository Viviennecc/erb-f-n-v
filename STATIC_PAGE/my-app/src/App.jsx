import { useState } from "react";
import HERO from "./components/HERO";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HERO />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}
export default App;
