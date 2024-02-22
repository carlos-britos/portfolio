import { useState, useEffect, useRef } from 'react'
import './App.scss'
import Header from './components/shared/Header'
import { Home } from './components/views/Home';
import { Route, Routes } from 'react-router-dom';
import { Bubbles } from './components/shared/Bubbles'


function App() {
  // Array de secciones
  const [sections, setSections] = useState([])
  // Array con la posicion de las secciones
  const [sectionsPosition, setSectionsPosition] = useState([])
  // Step Actual
  const [step, setStep] = useState(0)

  // Bollean scroll
  const [scrolled, setScrolled] = useState(false)
  // Bollean scrollUp
  const [scrolledUp, setScrolledUp] = useState(false)
  // Guarda el valor del scroll actual 
  const prevScrollYRef = useRef(0);

  // Setea sections
  useEffect(() => {
    const arraySections = Array.from(document.querySelector('main').children);
    setSections(arraySections)
  }, [])

  // Setea sectionsPosition cuando cambia sections
  useEffect(() => {
    const sectionsTopPosition = sections.map((section) => {
      const sectionTop = section.getBoundingClientRect().top - 150;
      return sectionTop
    })
    
    setSectionsPosition(sectionsTopPosition)
  }, [sections])

  // Checkea la posicion y setea Step cuando cambia sectionsPosition || También setea si el header se debe mostrar o no
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      checkStep(scrollY)
      checkShowHeader(scrollY)
    }

    // Mira en step deberia estar y lo setea
    const checkStep = (scrollY) => {
      const indexElement = sectionsPosition.findIndex(
        (scroll, index, array) => 
          scrollY >= scroll && ( index === array.length - 1 || scrollY < array[index + 1] )
        );
  
      setStep(indexElement !== -1 ? indexElement : 0);
    }

    // Mira si se hizo scroll hacia arriba o abajo y setea las clases del header
    const checkShowHeader = (scrollY) => {
      if (scrollY === 0) {
        setScrolled(false)
        setScrolledUp(false)
      }
      else if (scrollY >= 1) {
        setScrolled(true)

        if (scrollY < prevScrollYRef.current) {
          setScrolledUp(true)  
        } else {
          setScrolledUp(false)
        }
      }

      prevScrollYRef.current = scrollY
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [sectionsPosition])

  return (
    <div className={`App step-${step} ${scrolled ? 'scrolled' : ''} ${scrolledUp ? 'scrolled-up' : ''}`}>
      {/* Header */}
      <Header />

      {/* body */}
      <>
        <Routes>
          <Route path='/portfolio/' element={<Home />} />
        </Routes>
      </>
      {/* bubbles */}
      <Bubbles />
      {/* footer */}
    </div>
  )
}

export default App
