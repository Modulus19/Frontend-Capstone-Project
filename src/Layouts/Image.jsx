import { useEffect, useState } from "react";
import "./Layouts.css";

export default function Image() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchImageData() {
      try {
        const response = await fetch(
          "https://anurella.github.io/json/planets.json",
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const imageData = await response.json();
        console.log(imageData);
        setPlanets(imageData);
      } catch (error) {
        console.error("Error fetching planet data:", error);
      }
    }

    fetchImageData();
  }, []);

  return (
    <section className="image-section">
      <h2>Visualizing the Differences Between Planets</h2>
      <p>
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      <div className="planet-list">
        {planets.length === 0 ? (
          <p>Loading...</p>
        ) : (
          planets.map((planet, index) => (
            <figure className="planet-fig" key={index}>
              <img
                src={planet.image}
                alt={planet.planet}
              />
              <figcaption>
                <p>{planet.planet}</p>
                <p>Distance From The Sun: {planet.distanceFromSun}</p>
              </figcaption>
            </figure>
          ))
        )}
      </div>
    </section>
  );
}
