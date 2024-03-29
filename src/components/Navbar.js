import React from "react";
import PropTypes from "prop-types";
import './Navbar.css';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
        </div>
        <ul className="darkThemes" >
          <li id="red" ></li>
          <li id="blue" ></li>
          <li id="green" ></li>
          <li id="yellow" ></li>
        </ul>
        <div className="form-check form-switch mx-4">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
<<<<<<< HEAD
        <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault ">{props.mode==="dark"?"Disable Dark Mode":"Enable Dark Mode"}</label>
=======
          <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault ">{props.mode === "dark" ? "disable dark Mode" : "Enable Dark Mode"}</label>
>>>>>>> branch1
        </div>
      </div>
    </nav>
  );
}

Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title here",
  about: "About here",
};