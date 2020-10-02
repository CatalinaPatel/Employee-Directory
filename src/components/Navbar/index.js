import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <Link className="navbar-brand" to="/">
                <Link className="navbar-brand" to="/">
                    Employee Directory
      </Link>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Home
            </Link>
                        </li>

                    </ul>
                </div>
    </nav>
  );
}

export default Navbar;