import React from 'react';
import CountUp from 'react-countup';
import './App.css';

function App() {
  return (
    <div className="App">
      <CountUp end={200} />
      <br />
      <CountUp end={200} duration={5} />

    </div>
  );
}

export default App;
