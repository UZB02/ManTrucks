import React from "react";
import "./page7.css";

export const Page7 = () => {
  return (
    <>
      <div id="page7" className="page7">
        <div className="container">
          <h1>WANT MORE INFORMATION? THIS WAY, PLEASE!</h1>
          <div className="cards">
            <div className="card">
              <div className="top">
                <h2>ANY QUESTIONS?</h2>
              </div>
              <div className="btn">
                <a href="#">CONTACT US</a>
              </div>
            </div>
            <div className="card">
              <div className="top">
                <h2>CONSULTANCY? LET’S MEET IN PERSON:</h2>
                <div className="link-input">
                  <input type="text" name="" id="" placeholder="Please enter location or country" />
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="darkgrey"
                    >
                      <path d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="btn">
                <a href="#">TO YOUR DEALER</a>
              </div>
            </div>
            <div className="card">
              <div className="top">
                <h2>WOULD YOU LIKE TO CONTACT YOUR MAN CONSULTANT?</h2>
              </div>
              <div className="btn">
                <a href="#">FIND A CONTACT PERSON</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
