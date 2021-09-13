import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

function App() {
  const [brutto, setBrutto] = useState('');
  const [vero, setVero] = useState(0);
  const [tv, setTv] = useState(1);
  const [te, setTe] = useState(1);
  const [netto, setNetto] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const veroSumma = brutto / 100 * vero;
    const tyoelakeSumma = brutto / 100 * te;
    const tvmSumma = brutto / 100 * tv;
    setNetto(brutto - veroSumma - tyoelakeSumma - tvmSumma);

  }

  return (
    <div id="container">
      <h3>Palkkalaskuri</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Brutto</label>
        </div>
          <input type="number" value={brutto}
            onChange={e => setBrutto(e.target.value)}/>
        <div>
          <label>Vero (%)</label>
        </div>
          <input type="number" value={vero}
            onChange={e => setVero(e.target.value)}/>
        <div>
          <label>Työttömyysvakuutus (%)</label>
        </div>  
        <select value={tv} onChange={e => setTv(e.target.value)}>
          <FillOptions/>
        </select>
        <div>
          <label>Työeläke (%)</label>
        </div>  
        <select value={te} onChange={e => setTe(e.target.value)}>
          <FillOptions/>
        </select>
        <div>
            <label>Nettopalkkasi</label>
            <output id="netto">{netto}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>

  );
}

export default App;
