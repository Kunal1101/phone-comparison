import React from "react";
import { Form } from "react-bootstrap";

const Header = ({ searchTerm, setSearchTerm, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="d-flex flex-column flex-md-row justify-content-md-between align-items-lg-center mb-4 gap-3">
      <h1 className="text-center text-md-start m-0 fw-bold">Compare Phones</h1>

      <div className="d-flex gap-1 align-items-center">
        <Form className="d-flex flex-grow-1 mx-lg-4">
          <Form.Control
            type="text"
            placeholder="Search phones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="me-2"
          />
        </Form>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeToggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="darkModeToggle">
            {isDarkMode ? "Dark" : "Light"} Mode
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
