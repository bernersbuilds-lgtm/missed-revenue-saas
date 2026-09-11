import { Routes, Route } from "react-router-dom";

import MasterLanding from "./pages/MasterLanding";

import Barber from "./pages/Barber";
import BeautyClinic from "./pages/BeautyClinic";
import Chiropractor from "./pages/Chiropractor";
import Clinic from "./pages/Clinic";
import Dentist from "./pages/Dentist";
import Dermatologist from "./pages/Dermatologist";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import LashStudio from "./pages/LashStudio";
import Medspa from "./pages/Medspa";
import NailSalon from "./pages/NailSalon";
import PhysicalTherapy from "./pages/PhysicalTherapy";
import Salon from "./pages/Salon";

import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Routes>
      {/* Main landing page */}
      <Route path="/" element={<MasterLanding />} />

      {/* Industry pages */}
      <Route path="/barber" element={<Barber />} />
      <Route path="/beauty-clinic" element={<BeautyClinic />} />
      <Route path="/chiropractor" element={<Chiropractor />} />
      <Route path="/clinic" element={<Clinic />} />
      <Route path="/dentist" element={<Dentist />} />
      <Route path="/dermatologist" element={<Dermatologist />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lash-studio" element={<LashStudio />} />
      <Route path="/medspa" element={<Medspa />} />
      <Route path="/nail-salon" element={<NailSalon />} />
      <Route path="/physical-therapy" element={<PhysicalTherapy />} />
      <Route path="/salon" element={<Salon />} />

      {/* General pages */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}