import React from 'react';
import './App.scss';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Gallery from "./components/gallery/gallery.component";
import Overview from "./components/overview/overview.component";
import DetailSection from "./components/section-detail/section-detail.component";
import CTA from "./components/cta/cta.component";

function App() {
  return (
    <div className="App container">
      <Header/>
      <div className="content">
          <Navigation/>
          <main className="hotel-view">
              <Gallery/>
              <Overview/>
              <DetailSection/>
              <CTA content='good news! we have 4 rooms for your selected date!'/>
          </main>
      </div>
    </div>
  );
}

export default App;
