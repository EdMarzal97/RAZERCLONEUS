import "./Navbar.css";

//<a href="https://icons8.com/icon/65230/razer">Razer icon by Icons8</a> no olvidarse
// <img
// src="https://img.icons8.com/color/50/000000/razer.png"
// alt="razer"
// />

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> <i className="ri-menu-line" id="navmenu"></i> </span>
      </button>
      <a className="navbar-brand" href="/"> <img id="logo" src="https://img.icons8.com/color/50/000000/razer.png" alt="logo"/>  </a>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">PC</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Console</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Mobile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Lifestyle</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Support</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
