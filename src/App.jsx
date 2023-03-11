import React from "react";
import Navbar from "./components/navbar/Navbar";
import Heading from "./components/heading/Heading";
import Map from "./components/map/Map";
import Pie from "./components/pie/Pie"
import StateResult from "./components/state_results/StateResults"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="App">
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/" element={<Heading />} />

          </Routes>
        </React.Fragment>
      </main>
      <Map />
      <StateResult />
      <Pie />
      <Footer />
    </>
  );
}

export default App;
