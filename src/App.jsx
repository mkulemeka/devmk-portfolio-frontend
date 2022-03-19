import React from "react";

import { Navbar } from "./components";
import { About, Contact, Header, Skills, Work } from "./containers";

import './variables.css'
import "./App.scss";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
