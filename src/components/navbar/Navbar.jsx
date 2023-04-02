import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="icon">
          <FaCocktail style={{ "font-size": "40px" }} />
          <h3>The Cocktail Hub</h3>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
