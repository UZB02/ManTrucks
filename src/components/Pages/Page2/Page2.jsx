import React, { useState } from "react";
import "./page2.css";
import Man1 from "./man-lkw-tgx-teaser-16-9_width_534_height_300.jpg";
import Man2 from "./MAN2.jpeg"
import Man3 from "./MAN3.jpeg"
import Man4 from "./MAN4.jpeg"
import Man5 from "./MAN5.jpeg"
import Man6 from "./MAN6.jpeg"

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
      <div id="page2" className="page2">
        <div className="container">
          <div className="top">
            <h1>OUR POWERFUL OVERALL PACKAGE FOR YOU</h1>
            <div className="link">
              <a href="#">TEUCKS</a>
              <a href="#">BUSES</a>
              <a href="#">VANS</a>
              <a href="#">SERVICES</a>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <div className="cards">
              <div className="card">
                <div className="image">
                  <img src={Man1} alt="" />
                </div>
                <h2>THE MAN TGX</h2>
                <div className="texts">
                  <h3>Ergonomic driver's workplace</h3>
                  <h3>Efficient driveline</h3>
                  <h3>Smart assistance systems</h3>
                </div>
                <div className="btn">
                  <a href="#">THE MAN TGX</a>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Man2} alt="" />
                </div>
                <h2>THE MAN TGX</h2>
                <div className="texts">
                  <h3>Ergonomic driver's workplace</h3>
                  <h3>Efficient driveline</h3>
                  <h3>Smart assistance systems</h3>
                </div>
                <div className="btn">
                  <a href="#">THE MAN TGX</a>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Man3} alt="" />
                </div>
                <h2>THE MAN TGX</h2>
                <div className="texts">
                  <h3>Ergonomic driver's workplace</h3>
                  <h3>Efficient driveline</h3>
                  <h3>Smart assistance systems</h3>
                </div>
                <div className="btn">
                  <a href="#">THE MAN TGX</a>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Man4} alt="" />
                </div>
                <h2>THE MAN TGL</h2>
                <div className="texts">
                  <h3>Electric parking brake in the instrument</h3>
                  <h3>Compact cabs</h3>
                  <h3>MAN uptime guarantee</h3>
                </div>
                <div className="btn">
                  <a href="#">TO THE MAN TGL</a>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Man5} alt="" />
                </div>
                <h2>THE MAN TGE</h2>
                <div className="texts">
                  <h3>Large choice of variants</h3>
                  <h3>Individual body solutions</h3>
                  <h3>Tailor-made solution for your transport</h3>
                </div>
                <div className="btn">
                  <a href="#">THE MAN TGX</a>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Man6} alt="" />
                </div>
                <h2>THE MAN TGX</h2>
                <div className="texts">
                  <h3>Ergonomic driver's workplace</h3>
                  <h3>Efficient driveline</h3>
                  <h3>Smart assistance systems</h3>
                </div>
                <div className="btn">
                  <a href="#">THE MAN TGX</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
