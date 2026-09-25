import React from 'react';
import Header from './Header.jsx';
import Tabs from './Tabs/Tabs.jsx';
import CodeEditor from './Editor/CodeEditor.jsx';
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
        <CodeEditor />
      </main>
    </EditorProvider>
  );
}

export default AppShell;