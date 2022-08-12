import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Updates from "./Components/Updates";
import Campuslife from "./Components/Campuslife";
import Contact from "./Components/Contact";
import Footers from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Updates/>
      <Campuslife/>
      <Contact/>
      <Footers/>
    </div>
  );
}

export default App;
