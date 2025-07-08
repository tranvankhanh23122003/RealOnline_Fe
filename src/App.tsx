import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import ListBDS from "./page/ListBDS";
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list-bds" element={<ListBDS />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
