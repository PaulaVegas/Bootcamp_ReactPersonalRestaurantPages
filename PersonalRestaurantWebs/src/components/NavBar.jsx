import { Link } from 'react-router-dom'
import SunIcon from "../assets/icons/sun.png"
import MoonIcon from "../assets/icons/moon.png"
import '../assets/styles/layout/_navbar.scss'

function NavBar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reserve">Reserve</Link></li>
      </ul>
      
      <div className="theme-toggle">
        <label className='switch'>
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={toggleTheme}
          />
          <span className="slider">
            <span className='icon sun'>
              <img src={SunIcon} className="icon" alt="Sun Icon" />
            </span>
            <span className='icon moon'>
              <img src={MoonIcon} className="icon" alt="Moon Icon" />
            </span>
          </span>
        </label>
      </div>
    </nav>
  )
}

export default NavBar