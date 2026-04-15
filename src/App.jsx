import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Equipo from './components/Equipo'
import Testimonios from './components/Testimonios'
import Reservar from './components/Reservar'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Equipo />
      <Testimonios />
      <Reservar />
      <Ubicacion />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
