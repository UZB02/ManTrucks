import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="top">
              <div className="contact-us">
                <h3>Contact us</h3>
                <a href="#">Contact MAN Sales</a>
                <a href="#">Dealer & workshop search</a>
                <a href="#">Truck configurator</a>
                <a href="#">Van configurator</a>
                <a href="#">MAN Bus Designer</a>
                <a href="#">Press & Media</a>
              </div>
              <div className="social-media">
                <h3>Social media</h3>
                <div className="links">
                  {/* FACEBOOK */}
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#">MAN Truck & Bus</a>
                </div>
                <div className="links">
                  {/* YOU-TOBE */}
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a href="#">MAN Truck & Bus</a>
                </div>
                <div className="links">
                  {/* FACEBOOK */}
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#">Trucker's World by MAN</a>
                </div>
                <div className="links">
                  {/* INSTAGRAM */}
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">MAN Truck & Bus</a>
                </div>
                <div className="links">
                  {/* TWITTER*/}
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#">MAN Truck & Bus</a>
                </div>
                <div className="links">
                  {/* LINKIDIN*/}
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#">MAN Truck & Bus SE</a>
                </div>
              </div>
              <div className="company">
                <h3>Company</h3>
                <a href="#">MAN in Germany</a>
                <a href="#">MAN Truck & Bus Company</a>
                <a href="#">Suppliers & partners</a>
                <a href="#">Body Builder Truck</a>
                <a href="#">Production sites</a>
                <a href="#">Careers at MAN</a>
                <a href="#">Compliance & Integrity</a>
                <a href="#">Whistleblowing system</a>
                <a href="#">Suspected Cyber Security Threat</a>
              </div>
              <div className="portals">
                <h3>Portals</h3>
                <a href="#">MAN Service Portal</a>
                <a href="#">MAN Shop</a>
                <a href="#">MAN Trucker's World</a>
                <a href="#">MAN TopUsed</a>
                <a href="#">NEOPLAN</a>
              </div>
            </div>
            <div className="centre">
              <div className="market-language">
                <d iv className="left">
                  <h3>Market</h3>
                  <div className="links">
                    <a href="#">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z" />
                      </svg>
                    </a>
                    <a href="#">Germany</a>
                  </div>
                </d>
                <div className="right">
                  <h3>Language</h3>
                  <select name="" id="">
                    <option value="">English</option>
                    <option value="Deutsch">
                      <a href="#">Deutsch</a>
                    </option>
                  </select>
                </div>
              </div>
              <div className="middle">
                <div className="links">
                  <a href="#">Imprint</a>
                  <a href="#">Data protection</a>
                  <a href="#">Cookies</a>
                  <a href="#">General terms & conditions</a>
                  <a href="#">Recycling of scrap vehicles</a>
                  <a href="#">WLTP</a>
                </div>
                <div className="logo">
                  <img
                    src="https://www.man.eu/de/media/ntg_resources/assets/images/man_1/man_footer_logo.png"
                    width="100"
                    height="60"
                    alt="MAN Footer Logo"
                  ></img>
                  <pre>A member of TRATON GROUP. © MAN 2023</pre>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h2>General information</h2>
              <p>Country-specific availability may vary.</p>
              <p>
                The vehicles and products displayed on this website may differ
                in terms of shape, design, colour and scope of supply. Some of
                the images may include special equipment, accessories and
                decorative elements which are subject to an additional charge.
                The technical features and equipment of the vehicles described
                are merely examples and may differ, in particular on a
                country-specific basis. Products and services shown may not be
                available in all countries. We reserve the right to make changes
                at any time.
              </p>
              <p>
                The air-conditioning systems in our vehicles contain fluorinated
                greenhouse gases (R134a / GWP 1,430 with up to 1.15 kg
                equivalent to 1.6445 t CO2). In MAN TGE vehicle classes N1, M1,
                N2 and M2, refrigerant of the type R1234yf is used. The GWP
                value of the refrigerant used is 4 (refrigerant type R1234yf).
                In case of one refrigerant compressor, filling quantities vary
                between 540 and 570 grams. In case of two refrigerant
                compressors they vary between 785 and 815 grams.
              </p>
              <p>
                With the MAN eTGE, refrigerant R134a is used. The GWP value of
                the refrigerant used is 1.430 (refrigerant type R134a). The fill
                levels depend on the refrigerant compressor and vary between 560
                and 590 grams.
              </p>
              <p>
                We, MAN Truck & Bus SE, are aware of our product responsibility
                for the packaging we put on the market and implement the
                specifications of the Packaging Act (VerpackG) responsibly. You
                can return the packaging that we have placed on the market in
                Germany that is not subject to system participation free of
                charge.
              </p>
              <h2>Additional information to MAN TGE</h2>
              <p>
                Our MAN TGE vehicles are equipped with summer tyres as standard.
                Please check the national regulations regarding any mandatory
                winter tyres. Your MAN partner will be happy to advise you.
              </p>
              <p>
                The specified fuel consumption and emission data has been
                determined according to the measurement procedures specified by
                law. As from 1st September 2017, some new vehicles are already
                being type-approved according to the Worldwide Harmonized Light
                Vehicles Test Procedure (WLTP), a more realistic test procedure
                for measuring fuel consumption and CO2 emissions. Since 1st
                September 2018, WLTP has also replaced the New European Driving
                Cycle (NEDC) for light commercial vehicles. In cases where the
                fuel consumption and emission values are specified as value
                ranges, these do not refer to a particular individual vehicle
                and do not constitute part of the sales offering. They are
                solely used for comparison purposes between the different
                vehicle types.
              </p>
              <p>
                Additional equipment and accessories (add-on parts, different
                tyre formats, etc.) may change relevant vehicle parameters, such
                as weight, rolling resistance and aerodynamics. In conjunction
                with weather and traffic conditions and driving style, they may
                also affect fuel and power consumption, CO2 emissions and the
                performance figures for the vehicle.
              </p>
              <p>
                Efficiency classes rate vehicles for passenger transport with an
                M1 passenger vehicle registration according to the CO2 emissions
                under consideration of the vehicle dead weight. Vehicles which
                conform to the average are classified as D. Vehicles which are
                above the current average are classified as A+, A, B or C.
                Vehicles which are below average are classified as E, F or G.
              </p>
              <p>
                Additional information regarding the official fuel consumption
                and the official specific CO2 emissions of new vehicles for
                passenger transport with an M1 passenger vehicle registration
                can be found in the “Guide on the fuel economy, CO2 emissions,
                and power consumptions of all new passenger car models”. This
                guideline is available free of charge at all sales points and
                from the DAT Deutsche Automobil Treuhand GmbH,
                Hellmuth-Hirth-Str. 1, 73760 Ostfildern-Scharnhausen, Germany (
                https://www.datgroup.com/ ).
              </p>
            </div>
          </div>
        </div>
      </>
    );
};
