import "./Components.css";
import arrowIcon from "../assets/arrow-right.png";

export default function Submit() {
  return (
    <>
      <button className="submit-button">
        Submit
        <img className="arrow-icon" src={arrowIcon} alt="Arrow Icon" />
      </button>
    </>
  );
}
