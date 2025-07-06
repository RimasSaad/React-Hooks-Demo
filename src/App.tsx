// App.tsx
// Root component of the app. 

import React, { useState } from 'react';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseLayoutEffectDemo from './components/UseLayoutEffectDemo';
import UseReducerDemo from './components/UseReducerDemo';
import UseContextDemo from './components/UseContextDemo';
import { ColorProvider } from './context/ColorContext';
import UseCallbackDemo from './components/UseCallbackDemo';
import UseMemoDemo from './components/UseMemoDemo';
import UseTransitionDemo from './components/UseTransitionDemo';



function App() {
const [view, setView] = useState<string>(''); // controls which component to show

  return (
    // Wrap the app in ColorProvider to provide color Context
    <ColorProvider>
      <div>
        <h1>React Hooks Demo</h1>
        <h2>Choose the hook demo: </h2>
        {/* Buttons to select each hook demo */}
        <button onClick={() => setView('useState')}> useState Demo</button>
        <button onClick={() => setView('useEffect')}> useEffect Demo</button>
        <button onClick={() => setView('useLayoutEffect')}> useLayoutEffect Demo</button>
        <button onClick={() => setView('useReducer')}> useReducer Demo</button>
        <button onClick={() => setView('useContext')}> useContext Demo</button>
        <button onClick={() => setView('useCallback')}> useCallback Demo</button>
        <button onClick={() => setView('useMemo')}> useMemo Demo</button>
        <button onClick={() => setView('useTransition')}> useTransition Demo</button>

        {/* Conditionally render the selected demo */}
        {view === 'useState' && <UseStateDemo />}
        {view === 'useEffect' && <UseEffectDemo />}
        {view === 'useLayoutEffect' && <UseLayoutEffectDemo />}
        {view === 'useReducer' && <UseReducerDemo />}
        {view === 'useContext' && <UseContextDemo />}
        {view === 'useCallback' && <UseCallbackDemo />}
        {view === 'useMemo' && <UseMemoDemo />}
        {view === 'useTransition' && <UseTransitionDemo />}
      </div>
    </ColorProvider>
  );
}

export default App;
