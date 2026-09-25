import React from 'react';

function Tab({ name, active }) {
  return (
    <button
      type="button"
      className={active ? 'react-tab is-active' : 'react-tab'}
    >
      <span>{name}</span>
      <span aria-hidden="true">×</span>
    </button>
  );
}

export default Tab;