import React from 'react';
import Header from './Header.jsx';
import Tabs from './Tabs/Tabs.jsx';

function AppShell() {
  return (
    <main
      className="react-app-shell"
      aria-label="Кодик"
    >
      <Header />
      <Tabs />
    </main>
  );
}

export default AppShell;