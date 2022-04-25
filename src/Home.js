import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Login from "./Login";

export default function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <About />
      <Projects />
      <Contacts />
      <Login />
    </div>
  );
}
