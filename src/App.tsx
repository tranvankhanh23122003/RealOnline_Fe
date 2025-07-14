import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import ListBDS from "./page/ListBDS";
import DuAn from "./page/duAn";
import MainLayout from "./layout/MainLayout";
import ListTDC from "./page/ListTDC";
import SoSanhSp from "./page/SoSanhSP";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/list-bds" element={<ListBDS />} />
            <Route path="/duAn" element={<DuAn />} />
            <Route path="/list-tdc" element={<ListTDC />} />
            <Route path="/so-sanh-sp" element={<SoSanhSp />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
