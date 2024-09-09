// src/App.js
import { Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import "./index.css";
import { Navbar } from "./Navbar";
import { Photography } from "./Photography";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
