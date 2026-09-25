import React from 'react';
import Tab from './Tab.jsx';
import { useEditor } from '../../state/EditorContext.jsx';

function Tabs() {
  const {
    tabs,
    activeTabId,
    setActiveTabId,
  } = useEditor();

  return (
    <nav
      className="react-tabs"
      aria-label="Вкладки файлів"
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          name={tab.name}
          active={tab.id === activeTabId}
          onClick={() => setActiveTabId(tab.id)}
        />
      ))}

      <button
        type="button"
        className="react-tab-add"
        aria-label="Нова вкладка"
      >
        +
      </button>
    </nav>
  );
}

export default Tabs;