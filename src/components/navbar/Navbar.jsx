import "./Navbar.css";
import logo from "../../assets/images/HernalyticsLogo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import Heading from "../heading/Heading";
import Map from "../map/Map";

const Navbar = () => {
  return (
    <>
      {/* <div className="body"> */}
      <nav className="header">
        <div className="header-text">
          <img src={logo} alt="" className="app-logo" />
          <ul>
            <a href="/">ABOUT US</a>
          </ul>
          <ul>
            <a href="/">
              OUR COMMUNITIES <IoMdArrowDropdown />
            </a>
          </ul>
          <ul>
            <a href="/">
              ELECTION DATA <IoMdArrowDropdown />{" "}
            </a>
          </ul>
          <ul>
            <a href="/">E-BUDDY</a>
          </ul>
          <ul>
            <a href="/"> VEO PLATFORM</a>
          </ul>
          <ul>
            <a href="/">LOGIN</a>
          </ul>
          <ul>
            <button className="signup-button">SIGNUP</button>
          </ul>
        </div>
      </nav>

      <Heading />
      {/* <Map /> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
