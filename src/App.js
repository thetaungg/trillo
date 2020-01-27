import React from 'react';
import './App.scss';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Gallery from "./components/gallery/gallery.component";
import Overview from "./components/overview/overview.component";
import DetailSection from "./components/section-detail/section-detail.component";
import CTA from "./components/cta/cta.component";

import ReactGA from 'react-ga'; //package for google analytics in react


function App() {
    ReactGA.initialize('UA-157015392-5'); //adding google analytics
    ReactGA.pageview(window.location.pathname + window.location.search); //this tracks all the pages that user visits in this website
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
