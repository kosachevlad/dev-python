import React, { useMemo } from 'react';
import LineNumbers from './LineNumbers.jsx';
import { useEditor } from '../../state/EditorContext.jsx';

function CodeEditor() {
  const { activeTab, updateActiveCode } = useEditor();
  const lineCount = useMemo(
    () => activeTab.code.split('\n').length,
    [activeTab.code],
  );

  return (
    <section className="react-editor" aria-label="Редактор коду">
      <LineNumbers count={lineCount} />

      <textarea
        value={activeTab.code}
        onChange={(event) => updateActiveCode(event.target.value)}
        spellCheck="false"
        aria-label={`Код Python у ${activeTab.name}`}
      />
    </section>
  );
}

export default CodeEditor;