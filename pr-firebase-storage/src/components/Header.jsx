import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-info" to="/">
          📚 BookVault
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                ➕ Add Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/view-books">
                📖 View Books
              </NavLink>
            </li>
          </ul>

          <input
            className="form-control w-25 bg-dark text-light border-secondary"
            placeholder="🔍 Search books..."
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
