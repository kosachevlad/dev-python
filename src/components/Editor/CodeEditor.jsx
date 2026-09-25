import React, { useEffect, useMemo, useRef } from 'react';
import LineNumbers from './LineNumbers.jsx';
import { useEditor } from '../../state/EditorContext.jsx';

function CodeEditor() {
  const { activeTab, updateActiveCode } = useEditor();
  const textareaRef = useRef(null);
  const lineCount = useMemo(
    () => activeTab.code.split('\n').length,
    [activeTab.code],
  );

  useEffect(() => {
    function handleInsert(event) {
      const textarea = textareaRef.current;
      const symbol = event.detail;

      if (!textarea) {
        return;
      }

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const nextCode = (
        activeTab.code.slice(0, start)
        + symbol
        + activeTab.code.slice(end)
      );

      updateActiveCode(nextCode);

      requestAnimationFrame(() => {
        textarea.focus();
        const cursorPosition = start + symbol.length;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
      });
    }

    window.addEventListener('react-insert-symbol', handleInsert);

    return () => {
      window.removeEventListener('react-insert-symbol', handleInsert);
    };
  }, [activeTab.code, updateActiveCode]);

  return (
    <section className="react-editor" aria-label="Редактор коду">
      <LineNumbers count={lineCount} />

      <textarea
        ref={textareaRef}
        value={activeTab.code}
        onChange={(event) => updateActiveCode(event.target.value)}
        spellCheck="false"
        aria-label={`Код Python у ${activeTab.name}`}
      />
    </section>
  );
}

export default CodeEditor;