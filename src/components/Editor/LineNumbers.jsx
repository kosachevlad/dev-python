import React from 'react';

function LineNumbers({ count }) {
  return (
    <div
      className="react-line-numbers"
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, index) => (
        <span key={index}>{index + 1}</span>
      ))}
    </div>
  );
}

export default LineNumbers;