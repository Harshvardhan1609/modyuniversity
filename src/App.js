import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Updates from "./Components/Updates";
import Campuslife from "./Components/Campuslife";
import Contact from "./Components/Contact";
import Footers from "./Components/Footer";
import Schools from "./Components/Schools";
import CampusTour from "./Components/CampusTour";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CampusTour/>
      <Schools/>
      <Updates/>
      <Campuslife/>
      <Contact/>
      <Footers/>
    </>

  );
}

export default App;
