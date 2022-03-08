import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function App() {
    // const [results, setResults] = useState([])

    fetch('http://localhost:5000/1metabolite/co2/25')
        .then(response => response.json())
        .then(data => console.log(data));
    //     .then(response => response.json())
    //     .then(data => {
    //         setResults(data)
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
            {/*<p>{results}</p>*/}
        </header>
      </div>
  );
}

export default App;
