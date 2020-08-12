import React, { useEffect } from 'react';
// import {GoogleMapContainer} from './components/GoogleMapContainer/GoogleMapContainer';
import './App.css';

function App() {

    useEffect(() => {
      renderMap();
    })

  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD4bqhCOPhLTodbwADYYwuPDOwC0tYHE_M&callback=initMap");
    window.initMap = initMap;
  }

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  return (
    <main>
      <div id="map"></div>
    </main>
  )
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;