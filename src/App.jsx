import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pneumonia from "./pages/Pneumonia";
import BrainTumor from "./pages/BrainTumor";
import SkinCancer from "./pages/SkinCancer";
import Heart from "./pages/Heart";
import Diabetes from "./pages/Diabetes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pneumonia" element={<Pneumonia />} />
        <Route path="/braintumor" element={<BrainTumor />} />
        <Route path="/skincancer" element={<SkinCancer />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/diabetes" element={<Diabetes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
