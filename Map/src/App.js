import React, { useEffect, useState } from 'react';
import './App.css';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';
import { SearchBox } from './components/SearchBox/SearchBox';

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
      <Map
        className="world-map"
        google={props.google}
        initialCenter={{
          lat: 15.5015341,
          lng: 32.5025565
        }}
        zoom={5}
      >
        {mapData.map((country) => (
          <Polygon
            key={country.name}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
            paths={country.data}
          />
        ))}
      </Map>
      <SearchBox />
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD4bqhCOPhLTodbwADYYwuPDOwC0tYHE_M')
})(App)