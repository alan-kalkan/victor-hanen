import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import "./index.css";
import { Navbar } from "./Navbar";
import { Photography } from "./Photography";

export default function App() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      <Navbar isHidden={isSliderOpen} />
      <Routes>
        <Route
          path="/"
          element={<Photography setIsSliderOpen={setIsSliderOpen} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
