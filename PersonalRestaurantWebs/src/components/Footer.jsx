import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Code & Bites. All rights reserved.</p>

        <ul className="footer__nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/reserve">Reserve</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer