import React, { useMemo, useState } from 'react';
import LineNumbers from './LineNumbers.jsx';

const initialCode = 'print("Привіт, Python!")';

function CodeEditor() {
  const [code, setCode] = useState(initialCode);
  const lineCount = useMemo(
    () => code.split('\n').length,
    [code],
  );

  return (
    <section className="react-editor" aria-label="Редактор коду">
      <LineNumbers count={lineCount} />

      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        spellCheck="false"
        aria-label="Код Python"
      />
    </section>
  );
}

export default CodeEditor;