import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Aditya<span>.</span>
      </NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
        <li><NavLink to="/weather" className={({ isActive }) => isActive ? 'active' : ''}>Weather</NavLink></li>
      </ul>
    </nav>
  );
}
