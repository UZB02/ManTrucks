import React from "react";
import "./page3.css";
import Man1 from "./man1.jpeg";
import Man2 from "./man2.jpeg";
import Man3 from "./man3.jpeg";

export const Page3 = () => {
  return (
    <>
      <div id="page3" className="page3">
        <div className="container">
          <h1>THE MAN INDIVIDUAL TOP MODEL</h1>
          <div className="cards">
            <div className="card">
              <div className="image">
                <a href="#">
                  <img src={Man1} alt="" />
                </a>
              </div>
              <a href="#">
                <h2>LION WITHOUT COMPROMISE: THE MAN TGX INDIVIDUAL LION S</h2>
              </a>
              <div className="texts">
                <h3>Stunning exterior design</h3>
                <h3>Maximum interior comfort</h3>
                <h3>Absolute high performance</h3>
              </div>
              <div className="btn">
                <a href="#">TO MAN TGX INDIVIDUAL LION S</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <a href="#">
                  <img src={Man2} alt="" />
                </a>
              </div>
              <a href="#">
                <h2>
                  KING ON EVERY CONSTRUCTION SITE: THE MAN TGS INDIVIDUAL LION S
                </h2>
              </a>
              <div className="texts">
                <h3>Impressive exterior design</h3>
                <h3>Robust, comfortable interior</h3>
                <h3>Exceptional off-road suitability</h3>
              </div>
              <div className="btn">
                <a href="#">THE MAN TGX</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <a href="#">
                  <img src={Man3} alt="" />
                </a>
              </div>
              <a href="#">
                <h2>
                  THE VAN IN A CLASS OF ITS OWN: THE MAN TGE INDIVIDUAL LION S
                </h2>
              </a>
              <div className="texts">
                <h3>
                  Exclusive exterior design with eye-catching red elements
                </h3>
                <h3>High-quality interior with LED lighting accents</h3>
                <h3>
                  High-end equipment line for all those who love a strong
                  appearance
                </h3>
              </div>
              <div className="btn">
                <a href="#">THE MAN TGX</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
