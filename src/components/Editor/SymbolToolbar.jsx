import React from 'react';

const symbols = [
  ':', '=', '(', ')', '"', "'", '<', '>',
  '/', '*', '%', '+', '-', '[', ']',
  '{', '}',
];

function SymbolToolbar() {
  return (
    <nav
      className="react-symbol-toolbar"
      aria-label="Спеціальні символи Python"
    >
      {symbols.map((symbol) => (
        <button
          key={symbol}
          type="button"
          aria-label={`Вставити ${symbol}`}
        >
          {symbol}
        </button>
      ))}
    </nav>
  );
}

export default SymbolToolbar;