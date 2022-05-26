import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState("");

  const eventValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-block">
            <Link to="/" className="navbar-brand">
              На головну
            </Link>
            <Link to="/choosen" className="navbar-brand">
              Обране
            </Link>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              value={value}
              onChange={eventValue}
              type="search"
              placeholder="Пошук"
              aria-label="Пошук"
            />
          <Link  className="btn btn-outline-success" to="/search" state={value}>Search</Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
