// src/App.js
import React from "react";
import "./App.css";

const App = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("Link tıklama devre dışı bırakıldı.");
  };

  return (
    <div className="App">
      <div className="dashboard-card">
        {/* Header Section */}
        <header className="app-header">
          <h1 className="app-title">React_Test</h1>
          <p className="app-subtitle">Developer Dashboard & Sandbox</p>
        </header>

        {/* Info / Status Indicators */}
        <div className="dashboard-grid">
          <div className="grid-section">
            <h2 className="section-title">Status Overview</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div className="status-indicator">
                <span className="dot"></span>
                <span>Active Sandbox Mode</span>
              </div>
              <div className="status-indicator">
                <span className="dot disabled-dot"></span>
                <span>Security Policies Enforced</span>
              </div>
            </div>
          </div>

          {/* Active Sandbox Elements Section */}
          <div className="grid-section">
            <h2 className="section-title">Interactive Elements</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <button className="btn-primary" type="button">
                  Test Button
                </button>
              </div>
              <div className="status-indicator">
                <span>Accent Color Reference:</span>
                <span className="rtest">this color is blue</span>
              </div>
            </div>
          </div>

          {/* Locked / Disabled Controls Section */}
          <div className="grid-section">
            <h2 className="section-title">Security Restrictions</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Disabled Submit Button */}
              <div>
                <button
                  className="btn-primary"
                  data-testid="r_button"
                  type="submit"
                  disabled
                >
                  r_sub
                </button>
              </div>

              {/* Disabled Input Element */}
              <fieldset className="fieldset-container" disabled>
                <div className="input-wrapper">
                  <input
                    className="text-input"
                    type="text"
                    data-testid="r_input"
                    placeholder="Giriş devre dışı"
                  />
                </div>
              </fieldset>

              {/* Disabled Link */}
              <div>
                <a
                  className="link-badge"
                  data-testid="r_link"
                  href="https://tolgahanacar.net"
                  onClick={handleLinkClick}
                  style={{
                    color: "gray",
                    pointerEvents: "none",
                    cursor: "default",
                  }}
                >
                  r_link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
