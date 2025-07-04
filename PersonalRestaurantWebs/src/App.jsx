import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Contact from './components/Contact'
import About from './pages/About'
import Reserve from './components/Reserve'

function App() {
  const [theme, setTheme] = useState('dark') 
  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(`theme-${theme}`)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
     <BrowserRouter>
      <div className="app-container">
          <NavBar theme={theme} toggleTheme={toggleTheme} />       
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2025 Personal Learning Project. All rights reserved.</p>
      </footer>
    </div>
  </BrowserRouter>
  )
}

export default App
