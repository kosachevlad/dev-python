import React, { useState } from 'react';

function Terminal() {
  const [value, setValue] = useState('');

  return (
    <section
      className="react-terminal"
      aria-label="Термінал"
    >
      <header className="react-terminal-header">
        <span>Термінал</span>
        <span>input() підтримує UA / EN</span>
      </header>

      <pre className="react-terminal-output">
        Готово до запуску. Натисни «Запустити», щоб побачити результат.
      </pre>

      <form className="react-terminal-input">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Введи відповідь для input()…"
          aria-label="Відповідь для input"
        />
        <button type="submit">
          Надіслати
        </button>
      </form>
    </section>
  );
}

export default Terminal;