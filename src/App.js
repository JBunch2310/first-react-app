import FirstComponent from './FirstComponent';
import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <FirstComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first react app.
        </p>
        <a
          className="App-link"
          href="https://www.bocacode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <p>Opps!</p>
    </>
  );
}

export default App;
