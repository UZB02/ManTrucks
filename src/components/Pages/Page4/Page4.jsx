import React from "react";
import Image1 from "./image1.jpeg";
import "./page4.css";

export const Page4 = () => {
  return (
    <>
      <div id="page4" className="page4">
        <div className="container">
          <div className="boxs">
            <div className="left">
              <div className="yellow">
                <h2>MAN Truck Champions 2023</h2>
              </div>
              <div className="text">
                <h1>VOTE NOW FOR YOUR FAVOURITE TRUCK!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, corrupti accusantium libero ullam cum nam doloremque
                  ipsam quisquam sapiente facere nemo voluptatum nostrum illo
                  fuga ab veritatis perferendis hic magni.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, corrupti accusantium libero ullam cum nam doloremque
                  ipsam quisquam sapiente facere nemo voluptatum nostrum illo
                  fuga ab veritatis perferendis hic magni.
                </p>
              </div>
              <div className="btn">
                <a href="#">ENTER NOW</a>
              </div>
            </div>
            <div className="right">
              <img src={Image1} alt="" />
            </div>
          </div>
          {/* <div className="boxs">
            <div className="left">
              <div className="yellow">
                <h2>MAN Truck Champions 2023</h2>
              </div>
              <div className="text">
                <h1>VOTE NOW FOR YOUR FAVOURITE TRUCK!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, corrupti accusantium libero ullam cum nam doloremque
                  ipsam quisquam sapiente facere nemo voluptatum nostrum illo
                  fuga ab veritatis perferendis hic magni.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, corrupti accusantium libero ullam cum nam doloremque
                  ipsam quisquam sapiente facere nemo voluptatum nostrum illo
                  fuga ab veritatis perferendis hic magni.
                </p>
              </div>
              <div className="btn">
                <a href="#">ENTER NOW</a>
              </div>
            </div>
            <div className="right">
              <img src={Image1} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
