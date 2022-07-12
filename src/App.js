import React from 'react';
import './style/style.css'
import Conversor from "./components/Conversor/Conversor"

function App() {
  return (
    <div className="container">
      <Conversor moedaA = "USD" moedaB = "BRL"></Conversor>
    </div> 
  );
}

export default App;
