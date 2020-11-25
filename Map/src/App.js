import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

const App = (props) => {

  const [mapData, setMapData] = useState([]);

  const fetchData = async () => {
    const apiCall = await fetch('http://localhost:5000/api/resources/countrydata/all');
    const mapData = await apiCall.json();
    setMapData(mapData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Google Map with React</h1>
      </header>
      <Map
        google={props.google}
        initialCenter={{
          lat: 15.5015341,
          lng: 32.5025565
        }}
        zoom={5}
      >
        <Polygon
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
          paths={mapData}
        />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD4bqhCOPhLTodbwADYYwuPDOwC0tYHE_M')
})(App)