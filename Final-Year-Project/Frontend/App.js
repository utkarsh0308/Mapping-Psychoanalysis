import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./informations_page/Home";
import About from "./informations_page/about";
import { Link } from "react-router-dom";
import CardWithPic from "./components/cardWithPic";

function App() {
  return (
    <div>
      <Navbar title="Mapping Psychoanalysis" />
      <Routes>
        <Route path="src\informations_page\Home.js" element={<Home />} />
        <Route path="src/informations_page/about.js" element={<About />} />
        {/* Other routes */}
      </Routes>
      <CardWithPic />
    </div>
  );
}

export default App;
