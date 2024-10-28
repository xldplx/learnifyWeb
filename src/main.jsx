import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode className="font-['Rethink Sans']">
    <Navbar />
    <Home />
  </StrictMode>,
)
