import './CurrencyComponent.css'
const CurrencyComponent=(props)=>{
  const {currencyChoice,selectCurrency,changeCurrency,amount} = props
  return(
    <div className="currency">
      <select value={selectCurrency} onChange={changeCurrency}>
        {currencyChoice.map((choice)=>
          <option key={choice} value={choice}>{choice}</option>
        )}
      </select>
      <input type="number" 
      value={amount}
      onChange={(e)=>console.log(e.target.value)}
      />
    </div>
  )
}

export default CurrencyComponent