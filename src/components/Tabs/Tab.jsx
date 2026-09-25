import React from 'react';

function Tab({ name, active, onClick }) {
  return (
    <button
      type="button"
      className={active ? 'react-tab is-active' : 'react-tab'}
      onClick={onClick}
    >
      <span>{name}</span>
      <span aria-hidden="true">×</span>
    </button>
  );
}

export default Tab;