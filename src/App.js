// App.js
import React from "react";
import Home from "./components/Home";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Shop from "./components/Shop";
import Items from "./components/Items";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
