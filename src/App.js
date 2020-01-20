import React from 'react';
import './App.scss';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <div className="App container">
      <Header/>
      <div className="content">
          <Navigation/>
          <main className="hotel-view">
              Hotel view
          </main>
      </div>
    </div>
  );
}

export default App;
