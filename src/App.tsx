import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import DuAn from "./page/duAn";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/duAn" element={<DuAn />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
