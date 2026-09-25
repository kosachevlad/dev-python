import React from 'react';
import Header from './Header.jsx';
import Tabs from './Tabs/Tabs.jsx';
import CodeEditor from './Editor/CodeEditor.jsx';

function AppShell() {
  return (
    <main
      className="react-app-shell"
      aria-label="Кодик"
    >
      <Header />
      <Tabs />
      <CodeEditor />
    </main>
  );
}

export default AppShell;