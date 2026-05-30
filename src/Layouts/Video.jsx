import "./Layouts.css";

export default function Video() {
  return (
    <>
      <section className="video-section">
        <div className="video-frame">
          <video autoPlay muted loop controls>
            <source
              src="https://media.istockphoto.com/id/1162927649/video/sun-and-planets-of-the-solar-system-animation-3d-rendering.mp4?s=mp4-640x640-is&k=20&c=agRIL2vRsPcu8soxnZf8rpRSI584RkerD4sEFo94UoM="
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-content">
          <h2>How Planetary Data Helps Us Understand Space</h2>
          <p>
            Planetary science goes beyond images. Comparing
            <span> mass</span>,<span> diameter</span>,<span> gravity</span>, and
            <span> density</span>, we gain insight into how planets form,
            behave, and interact within the solar system.
          </p>
        </div>
      </section>
    </>
  );
}
