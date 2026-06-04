import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import About from "./components/About";
import Podcast from "./components/Podcast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
  <Navbar />
  <Hero />

  <main className="content">
    <VideoSection />
    <About />
    <Reviews />
    <Podcast />
    <Contact />
    <Footer />
  </main>
</>
  );
}

export default App;