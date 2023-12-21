import { useState, useEffect, useRef } from 'react'
import './App.scss'
import Header from './components/shared/Header'
import { Home } from './components/views/Home';
import { Route, Routes } from 'react-router-dom';
import { Bubbles } from './components/shared/Bubbles'


function App() {
  const [scrolled, setScrolled] = useState('');
  const [scrolledUp, setScrolledUp] = useState('');
  const [step, setStep] = useState(0);
  const [positions, setPositions] = useState([])
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {

      
      const scrollY = window.scrollY;

      if (scrollY < 1) {
        setScrolled('');
        setScrolledUp('');
      } else if (scrollY > 60) {
        setScrolled('scrolled');

        // Comparar scrollY con prevScrollY para determinar si el scroll está subiendo
        setScrolledUp(scrollY < prevScrollYRef.current ? 'scrolled-up' : '');
      } else {
        setScrolled('');
        setScrolledUp('');
      }

      const step1 =  (positions[1].top - 100)
      
      if (scrollY >= 0 && scrollY < step1 ) {
        setStep(0)
      } else if (scrollY >= step1 ) {
        setStep(1)
      }

      // Actualizar el valor anterior del scroll utilizando el ref
      prevScrollYRef.current = scrollY;
    };

    // Suscribirse al evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [positions]);

  useEffect(() => {
    const sections = Array.from(document.querySelector('main').children);

    const topPositions = sections.map((section, index) => {
      const top = section.getBoundingClientRect().top;

      return { 
        top: top, index
      };
    });

    setPositions(topPositions)
  }, []);
  
  return (
    <div className={`App ${scrolled} ${scrolledUp} step-${step}`}>
      {/* Header */}
      <Header />

      {/* body */}
      <>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </>
      {/* bubbles */}
      <Bubbles />
      {/* footer */}
    </div>
  )
}

export default App
