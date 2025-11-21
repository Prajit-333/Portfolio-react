import { useEffect } from 'react'
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./components/AboutSection"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import PillNav from './components/PillNav';
import logo from './assets/react.svg';


export default function App() {
  useEffect(() => {
    const path = window.location.pathname || '/';
    const id = path.replace(/^\//, '') || 'home';
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const nav = document.querySelector('nav');
        const navH = nav ? nav.offsetHeight : 0;
        const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 80);
  }, []);

  return (
    <>
      <Header />

      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Contact', href: '/contact' },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#000000"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
      />

      <CustomCursor />

      <main>
        {/* Single-page layout: all sections are rendered so normal scrolling works */}
        <HeroSection />
        <AboutSection />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
