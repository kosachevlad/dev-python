import React from 'react';
import Tab from './Tab.jsx';

const demoTabs = [
  {
    id: 'main',
    name: 'main.py',
    active: true,
  },
  {
    id: 'lesson-1',
    name: 'lesson-1.py',
    active: false,
  },
];

function Tabs() {
  return (
    <nav
      className="react-tabs"
      aria-label="Вкладки файлів"
    >
      {demoTabs.map((tab) => (
        <Tab
          key={tab.id}
          name={tab.name}
          active={tab.active}
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