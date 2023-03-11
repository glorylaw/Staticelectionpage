import { Grid } from "@chakra-ui/react";
import logo from "../../assets/images/HernalyticsLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="grid">
      <Grid className="grid" templateColumns="repeat(4, 1fr)" gap={20}>
        <div className="footer-first">
          <img src={logo} alt="" className="app-logo" />
          <p className="footer-address">
            Isale Eko Avenue, Dolphin Estae, Ikoyi, Lagos, <br /> Nigeria
          </p>
        </div>

        <div className="foot-first">
          <ul>
            <h3>About</h3>
            <li>Our Story</li>
            <li>Blog</li>
            <li>About Hernalytics</li>
            <li>Vidoes</li>
          </ul>
        </div>

        <div className="foot-first">
          <ul>
            <h3>Support</h3>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Vidoes</li>
          </ul>
        </div>

        <div className="foot-first">
          <ul>
            <h3>Let's chat!</h3>
            <li>hernalytics@gmail.com</li>
            <li>+234 801 234 5678</li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default Footer;
