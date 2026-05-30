import logo from "../assets/logo.png";
import "./Layouts.css";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <span>
            <img className="site-logo" src={logo} alt="TS Academy Logo" />
          </span>
        </nav>
      </header>
    </>
  );
}
