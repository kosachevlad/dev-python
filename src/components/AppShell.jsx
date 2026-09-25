import React from 'react';
import Header from './Header.jsx';
import Tabs from './Tabs/Tabs.jsx';
import SymbolToolbar from './Editor/SymbolToolbar.jsx';
import CodeEditor from './Editor/CodeEditor.jsx';
import Terminal from './Terminal/Terminal.jsx';
import '../styles/react-shell.css';
import { EditorProvider } from '../state/EditorContext.jsx';

function AppShell() {
  return (
    <EditorProvider>
      <main
        className="react-app-shell"
        aria-label="Кодик"
      >
        <Header />
        <Tabs />
        <SymbolToolbar />
        <CodeEditor />
        <Terminal />
      </main>
    </EditorProvider>
  );
}

export default AppShell;