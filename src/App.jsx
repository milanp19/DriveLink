import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Footer />
    </>
  );
}

export default App;
