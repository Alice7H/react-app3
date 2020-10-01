import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

 const [count, setCount] = useState(0);

 // similar a componentDidMount e componentDidUpdate:
useEffect(() => {
 // atualiza o título do documento 
 document.title = `Você clicou ${count} times`;
});

  return (
    <div className="App">
      <header className="App-header">
        <p>Você clicou {count} vezes</p>
        <button onClick={()=>setCount(count + 1)}>Clique</button>
      </header>
    </div>
  );
}

export default App;
