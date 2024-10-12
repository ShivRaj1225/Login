import React from "react";

import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
