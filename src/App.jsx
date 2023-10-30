import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
