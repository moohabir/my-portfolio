import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Login from "./Login";
import Header from "./Header";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
