import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Container, Row, Stack } from "react-bootstrap";
import Features from "./components/Features";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}

export default App;
