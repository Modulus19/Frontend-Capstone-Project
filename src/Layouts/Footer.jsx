import "./Layouts.css";
import profile from "../assets/profile.jpg";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="about-section">
          <div className="left-hand-side">
            <span className="profile">
              <img src={profile} alt="Profile Image" />
              <h1 className="name">EMMANUEL TANKO</h1>
              <p className="title">SOFTWARE DEVELOPER</p>
              <p className="title">+234 706 2472 888</p>
              <p className="title">youngmodulus19@gmail.com</p>
            </span>
          </div>
          <div className="right-hand-side">
            <h3>About</h3>
            <p>
              I am a motivated Computer Science & Information Technology (CSIT)
              OND graduate with hands-on internship experience, eager to launch
              a career in software development. Skilled in programming,
              problem-solving, and building practical solutions, with a strong
              drive for continuous learning and professional growth.
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <span>
            <p>&copy;2026 Design by Amaka & Ifeoma A.</p>
            <p>Built by Young Modulus. All rights reserved.</p>
          </span>

          <p>TSAcademy</p>
        </div>
      </section>
    </>
  );
}
