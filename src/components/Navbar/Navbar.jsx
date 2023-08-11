import React, { useState } from "react";
import Img1 from "../../img/69e927becf9898725286a98dd53ca369.jpg";
import "./nav.css";

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
      <header>
        <nav>
          <div className="container">
            <div className="left">
              <div className="top">
                <h4>MAN Germany</h4>
              </div>
              <div className="bottom">
                <a href="#page1">TRUCK</a>
                <a href="#page2">BUS</a>
                <a href="#page3">VAN</a>
                <a href="#page4">CONSULTANCY & PURCHASE</a>
                <a href="#page5">SERVICE</a>
                <a href="#page6">ABOUT US</a>
              </div>
            </div>
            <div className="right">
              <a href="#page1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                </svg>
              </a>
              <a href="#">
                <img src={Img1} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
