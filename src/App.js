import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {dataJsonFileAllPass} from "./data";



function App() {
    fetch('http://localhost:5000/1metabolite/co2/25')
        .then(response => response.json())
        .then(data => console.log(data));


    let bodyData = new FormData();
    bodyData.append("json", JSON.stringify(dataJsonFileAllPass));

    fetch('http://localhost:5000//comprehensive/version1',
    {
        method: "POST",
        body: bodyData
    }).then(response => response.json()).then(data => console.log(data));


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
