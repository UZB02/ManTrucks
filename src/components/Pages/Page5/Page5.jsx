import React from "react";
import "./page5.css";
import Image1 from "./image1.jpeg";
import Image2 from "./image2.jpeg";
import Image3 from "./image3.jpeg";
import Image4 from "./image4.jpeg";

export const Page5 = () => {
  return (
    <>
      <div id="page5" className="page5">
        <div className="container">
          <h1>NEWS</h1>
          <div className="cards">
            <div className="card">
              <div className="top">
                <a href="#">
                  <img src={Image1} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <h2>
                    MAN IN BARCELONA: WE ARE LIVE AT THE UITP GLOBAL PUBLIC
                    TRANSPORT SUMMIT
                  </h2>
                </a>
              </div>
              <div className="text">
                <p>
                  The world’s leading event on the subject of sustainable
                  mobility: The UITP Global Public Transport Summit 2023 in
                  Barcelona from 4 to 7 June will bring together international
                  local public transport experts – manufacturers as well as
                  authorities and operators. The congress offers exciting expert
                  talks and shows the latest innovations – including our
                  compact, all-electric MAN Lion’s City 10 E city bus. Meet us
                  at booth 6A100.
                </p>
              </div>
              <div className="btn">
                <a href="#">LEARN MORE</a>
              </div>
            </div>
            <div className="card">
              <div className="top">
                <a href="#">
                  <img src={Image2} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <h2>
                    AWARD-WINNING: THE MAN LION’S CITY E IS ‘BUS OF THE YEAR
                    2023’
                  </h2>
                </a>
              </div>
              <div className="text">
                <p>
                  The MAN Lion’s City E is ‘Bus of the Year 2023’. The jury for
                  the international ‘Bus Euro Test’ in Limerick, Ireland chose
                  the fully electric city bus as their ‘Bus of the Year 2023’.
                  Want to know how the MAN Lion’s City 12 E impressed the
                  experts even before the test and how it completed the 2500
                  kilometre journey from Germany to Ireland under its own power?
                  Find out for yourself.
                </p>
              </div>
              <div className="btn">
                <a href="#"> Find out more </a>
              </div>
            </div>
            <div className="card">
              <div className="top">
                <a href="#">
                  <img src={Image3} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <h2>MAN INDIVIDUAL LION S MODELS WIN RED DOT DESIGN AWARD</h2>
                </a>
              </div>
              <div className="text">
                <p>
                  Products submitted from around 60 countries, 48 international
                  jury experts, 2 winners: the MAN Individual Lion S models TGX
                  and TGE impress at the Red Dot Design Award 2022, winning in
                  the ‘Commercial Vehicles’ category. The award jury were
                  particularly impressed with the harmonious combination of
                  exclusive stylistic elements and carbon aesthetic in the
                  interior and exterior of the Lion S models. But these weren’t
                  the only decisive aspects … discover the winning trucks now
                  and find out more!
                </p>
              </div>
              <div className="btn">
                <a href="#"> To ‘Bus of the Year 2023’ </a>
              </div>
            </div>
            <div className="card">
              <div className="top">
                <a href="#">
                  <img src={Image4} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <h2>THE MAN DRIVER APP – THE PERFECT CO-DRIVER</h2>
                </a>
              </div>
              <div className="text">
                <p>
                  Whether in a truck, a bus or a transporter, the MAN Driver App
                  means drivers have all the important information at their
                  fingertips and a wealth of useful features to hand at all
                  times. Thanks to intelligent networking, it helps drivers,
                  fleet managers and workshops to form an even more efficient
                  team. Everything is designed with easy operation and
                  comprehensibility in mind. Further information about the MAN
                  Driver App is available for download free-of-charge in 26
                  languages for Android and iOS here.
                </p>
              </div>
              <div className="btn">
                <a href="#"> To the MAN Driver App </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
