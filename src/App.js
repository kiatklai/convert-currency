import { useEffect, useState } from 'react';
import CurrencyComponent from './components/CurrencyComponent';
import money from './img/money.png'
function App() {

  const [currencyChoice,setCurrencyChoice] = useState([])
  const [fromCurrency,setFromCurrency] = useState("JPY")
  const [toCurrency,setToCurrency] = useState("THB")

  const [amount,setAmount] = useState(1)
  const [exchangeRate,setExchangeRate] = useState(0)
  
  useEffect(()=>{
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url).then(res=>res.json())
    .then(data=>{setCurrencyChoice([...Object.keys(data.rates)])
    setExchangeRate(data.rates[toCurrency])
  })
  },[fromCurrency,toCurrency])
  return (
    <div>
      <img src={money} alt="logo" className="money-img"/>
      <h1>為替レートアプリ</h1>
      <div className="container">
        <CurrencyComponent 
        currencyChoice={currencyChoice} 
        selectCurrency={fromCurrency}
        changeCurrency={(e)=>setFromCurrency(e.target.value)}
        />
        <div className="equal">=</div>
        <CurrencyComponent 
        currencyChoice={currencyChoice} 
        selectCurrency={toCurrency}
        changeCurrency={(e)=>setToCurrency(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
