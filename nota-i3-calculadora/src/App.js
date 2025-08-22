
import React, { useState } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [ff, setFF] = useState(0);
  const [tc, setTC] = useState(0);

  const total = a + b + c + d + ff + tc;
  const denominador = (a/10) + (b/8) + (c/6) + (d/3) + (ff/1) + (tc/2);
  const i3 = total > 0 ? (total / denominador).toFixed(2) : "-";

  return (
    <div className="App">
      <h1>Calculadora de Nota I3</h1>
      <div>
        <label>A: <input type="number" value={a} onChange={e => setA(Number(e.target.value))} /></label><br/>
        <label>B: <input type="number" value={b} onChange={e => setB(Number(e.target.value))} /></label><br/>
        <label>C: <input type="number" value={c} onChange={e => setC(Number(e.target.value))} /></label><br/>
        <label>D: <input type="number" value={d} onChange={e => setD(Number(e.target.value))} /></label><br/>
        <label>FF: <input type="number" value={ff} onChange={e => setFF(Number(e.target.value))} /></label><br/>
        <label>TC (trancamento/cancelamento): <input type="number" value={tc} onChange={e => setTC(Number(e.target.value))} /></label>
      </div>
      <h2>Nota I3: {i3}</h2>
    </div>
  );
}

export default App;
