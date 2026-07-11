import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import USRealEstate from './components/USRealEstate.jsx'
import EcuadorRealEstate from './components/EcuadorRealEstate.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <USRealEstate />
        <EcuadorRealEstate />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
