import { useEffect } from 'react';
import CurrencyComponent from './components/CurrencyComponent';
import money from './img/money.png'
function App() {
  const url = `https://api.exchangerate-api.com/v4/latest/USD`
  
  useEffect(()=>{
    fetch(url).then(res=>res.json())
    .then(data=>console.log(data))
  })
  return (
    <div>
      <img src={money} alt="logo" className="money-img"/>
      <h1>為替レートアプリ</h1>
      <div className="container">
        <CurrencyComponent/>
        <div className="equal">=</div>
        <CurrencyComponent/>
      </div>
    </div>
  );
}

export default App;
