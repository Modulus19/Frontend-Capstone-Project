import "./Layouts.css";

export default function Table() {
  return (
    <>
      <section className="table-section" id="table-section">
        <h2>Planetary Facts at a Glance</h2>
        <p>
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>
        <table className="planet-table">
          <caption>
            Data about the planets of our solar system (Planetary facts taken
            from Nasa)
          </caption>
          <thead>
            <tr>
              <th scope="colGroup" colSpan="2"></th>
              <th scope="col">Name</th>
              <th scope="col">Mass (10 24kg)</th>
              <th scope="col">Diameter (km)</th>
              <th scope="col">Density (kg/m3)</th>
              <th scope="col">Gravity (m/s2)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="4" colSpan="2" scope="row">
                Terrestial Planets
              </th>

              <td>Mercury</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Venus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Earth</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Mars</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <th scope="rowGroup" rowSpan="4">
                Jovian Planets
              </th>
              <th scope="row" rowSpan="2">
                Gas Giants
              </th>
              <td>Jupiter</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Saturn</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <th scope="row" rowSpan="2">
                Ice Giants
              </th>
              <td>Uranus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <th scope="row" colSpan="2">
                Dwarf Giants
              </th>
              <td>Pluto</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
