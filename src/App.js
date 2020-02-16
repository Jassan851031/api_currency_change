import React from 'react';

import CardContainer from './components/CardContainer';
import Card from './components/Card'


import './App.css';

function App() {
  return (
    <div className="App">
      <CardContainer>
        <Card/>
      </CardContainer>
    </div>
  );
}

export default App;
