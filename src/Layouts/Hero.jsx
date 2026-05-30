import "./Layouts.css";
import heroImage from "../assets/hero-image.png";
import Explore from "../Components/Explore";
import Contact from "../Components/Contact";

export default function Hero() {
  return (
    <>
      <section className="hero-section" id="hero-section">
        <div className="hero-content">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          <div className="hero-links">
            <Explore />
            <Contact />
          </div>
        </div>

        <img src={heroImage} alt="Hero" />
      </section>
    </>
  );
}
