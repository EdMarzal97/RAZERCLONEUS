import "./Navbar.css";
import {Link} from "react-router-dom";

//<a href="https://icons8.com/icon/65230/razer">Razer icon by Icons8</a> no olvidarse
// <img
// src="https://img.icons8.com/color/50/000000/razer.png"
// alt="razer"
// />

const Navbar = () => {
  return (
    <div id="borderbot">
      <nav className="navbar navbar-expand-lg" id="navigation">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> <i className="ri-menu-line" id="navmenu"></i> </span>
          </button>
          <a className="navbar-brand" href="/"> <img id="logo" src="https://img.icons8.com/color/50/000000/razer.png" alt="logo"/>  </a>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to ="/pc"> PC </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/console">Console</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mobile">Mobile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lifestyle">Lifestyle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Community</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
