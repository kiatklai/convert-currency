import CurrencyComponent from './components/CurrencyComponent';
import money from './img/money.png'
function App() {
  return (
    <div>
      <img src={money} alt="logo"/>
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
