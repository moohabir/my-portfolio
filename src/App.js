import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
