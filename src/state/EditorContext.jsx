import React, { createContext, useContext, useMemo, useState } from 'react';

const EditorContext = createContext(null);

const initialTabs = [
  {
    id: 'main',
    name: 'main.py',
    code: 'print("Привіт, Python!")',
  },
];

export function EditorProvider({ children }) {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTabId, setActiveTabId] = useState('main');

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  const value = useMemo(() => ({
    tabs,
    activeTab,
    activeTabId,
    setActiveTabId,
    updateActiveCode(code) {
      setTabs((currentTabs) => currentTabs.map((tab) => (
        tab.id === activeTabId ? { ...tab, code } : tab
      )));
    },
  }), [tabs, activeTab, activeTabId]);

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error('useEditor must be used inside EditorProvider');
  }

  return context;
}