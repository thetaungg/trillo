import React from 'react';
import './App.scss';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Gallery from "./components/gallery/gallery.component";
import Overview from "./components/overview/overview.component";

function App() {
  return (
    <div className="App container">
      <Header/>
      <div className="content">
          <Navigation/>
          <main className="hotel-view">
              <Gallery/>
              <Overview/>
          </main>
      </div>
    </div>
  );
}

export default App;
