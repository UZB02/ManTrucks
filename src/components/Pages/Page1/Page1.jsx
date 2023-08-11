import React, { useState } from "react";
import "./page1.css";

const Navbar = () => {
  const [state, setState] = useState(true);

  const click = () => {
    setState(!state);
  };
  const [qaytish, setQaytish] = useState(true);

  const ortga = () => {
    setQaytish(!qaytish);
  };

  return (
    <>
      <div id="page1" className="page1">
        <div className="container">
          <div className="box">
            <h2>
              More efficiency and safety for the man truck generation: increased
              fuel savings of up to 6% <sup>1)</sup>
            </h2>
            <a href="#">To model overview</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
