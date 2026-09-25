import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <div className="app-brand">
        <div className="app-logo" aria-hidden="true">
          &lt;/&gt;
        </div>

        <h1>
          Кодик
          <span className="app-version">
            (React)
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;