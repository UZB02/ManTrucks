import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Page1 from "./components/Pages/Page1/Page1";
import Page2 from "./components/Pages/Page2/Page2";
import { Page3 } from "./components/Pages/Page3/Page3";
import { Page4 } from "./components/Pages/Page4/Page4";
import { Page5 } from "./components/Pages/Page5/Page5";
import { Page6 } from "./components/Pages/Page6/Page6";
import { Page7 } from "./components/Pages/Page7/Page7";
import { Footer } from "./components/Pages/Footer/Footer";
// import { Funksia } from "./components/Pages/Funksia/Usestate";n
function App() {
  return (
    <>
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
      {/* <Funksia/> */}
    </>
  );
}

export default App;
