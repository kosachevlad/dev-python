import React from 'react';
import { createRoot } from 'react-dom/client';
function ReactShell(){return <div data-react-shell>React shell is ready.</div>}
createRoot(document.getElementById('react-root')).render(<ReactShell />);
