import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="Comes With All You need for Daily Life"
        button="Get the app"
      />
      <About
        image={aboutimage1}
        title="Download And Get the App Now"
        button="Download"
      />
    </div>
  );
}

export default App;
