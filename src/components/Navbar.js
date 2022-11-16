import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <div className="nav-link" to="/">
                Home{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
