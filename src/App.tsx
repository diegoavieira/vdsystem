import { useState } from 'react';
import '@vdsystem/components/vds-toolbar';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <>
      <vds-toolbar title="Vanilla Design System" theme={theme}></vds-toolbar>

      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme: {theme}</button>
        <vds-toolbar title={`Contador: ${count}`} theme={theme}></vds-toolbar>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + VdsToolbar</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
