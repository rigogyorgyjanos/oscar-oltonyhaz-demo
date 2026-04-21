import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rolunk" element={<About />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/kapcsolat" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}