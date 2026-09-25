import React from 'react';

const symbols = [
  ':', '=', '(', ')', '"', "'", '<', '>',
  '/', '*', '%', '+', '-', '[', ']',
  '{', '}',
];

function SymbolToolbar() {
  function insertSymbol(symbol) {
    window.dispatchEvent(
      new CustomEvent('react-insert-symbol', {
        detail: symbol,
      }),
    );
  }

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
          onClick={() => insertSymbol(symbol)}
        >
          {symbol}
        </button>
      ))}
    </nav>
  );
}

export default SymbolToolbar;