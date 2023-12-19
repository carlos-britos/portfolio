import { useState } from 'react'
import './App.scss'
import Header from './components/shared/Header'
import { Home } from './components/views/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className={`App ${scrolled} ${scrolledUp}`}>
    <div className={`App`}>
      {/* Header */}
      <Header />

      {/* body */}
      <>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </>
      {/* bubbles */}
      {/* footer */}
    </div>
  )
}

export default App
