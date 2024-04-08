import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Fragment>
      <nav className="navbar pb-3 navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={"/home"}>React JS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/home"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/emp"}>Employee</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/movie"}>Movie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Fragment>
  );
}
