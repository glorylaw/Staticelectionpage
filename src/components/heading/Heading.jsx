import "./Heading.css";
import { Select } from "@chakra-ui/react";

// import Footer from "../footer/Footer";

const Heading = () => {
  return (
    <>
      <div className="neck">
        <h1>Post Election Data </h1> <span>PRESIDENTIAL / 2023</span>
      </div>
      <div className="all">
        <div className="neck-bottom">
          <h2>Presidential Race</h2>
        </div>
        <div className="select-options">
          <div>
            <Select
              placeholder="Election Data"
              variant="filled"
              colorScheme="blue"
              // size="lg"
              className="select"
              icon={false}
            >
              <option value="option1">Pre-Election</option>
              <option value="option2">Election Day Live Updates</option>
              <option value="option3">Post-Election Analysis</option>
            </Select>
          </div>

          <div>
            <Select
              placeholder="Presidential"
              variant="filled"
              colorScheme="red"
              size="md"
              className="select"
              icon={false}
            >
              <option value="option1">Presidential</option>
              <option value="option2">Gubernatorial</option>
              <option value="option3">Senate</option>
              <option value="option3">House Of Representatives</option>
            </Select>
          </div>

          <div>
            <Select placeholder="2023" className="select" icon={false}>
              <option value="option1" className="option">
                2023
              </option>
              <option value="option2">
                <p>2019</p>{" "}
              </option>
              <option value="option3">2015</option>
              <option value="option3">2011</option>
              <option value="option1">2007</option>
              <option value="option2">2003</option>
              <option value="option3">1999</option>
              <option value="option3">1995</option>
              <option value="option1">1991</option>
              <option value="option2">1987</option>
              <option value="option3">1983</option>
              <option value="option3">1979</option>
              <option value="option1">1975</option>
              <option value="option2">1971</option>
              <option value="option3">1967</option>
              <option value="option3">1963</option>
              <option value="option3">1959</option>
            </Select>
          </div>
        </div>
      
      </div>
   
      {/* <Footer /> */}
  
    
    </>
  );
};

export default Heading;
