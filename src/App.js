import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
