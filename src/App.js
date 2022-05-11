import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `Você clicou ${count} times`;
});

  return (
    <div className="App">
      <header className="App-header">
        <p>Você clicou {count} vezes</p>
        <button type="button" onClick={()=>setCount(count + 1)}>Adiciona</button>
        <button type="button" onClick={()=>setCount(0)}>Reestabelecer o contador</button>
      </header>
    </div>
  );
}

export default App;
