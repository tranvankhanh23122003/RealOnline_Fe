import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
