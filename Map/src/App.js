// import React, { useEffect } from 'react';
// // import {GoogleMapContainer} from './components/GoogleMapContainer/GoogleMapContainer';
// import { GoogleMap } from './components/GoogleMap/GoogleMap';
// import './App.css';

// function App() {

//     useEffect(() => {
//       renderMap();
//     })

//   const renderMap = () => {
//     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD4bqhCOPhLTodbwADYYwuPDOwC0tYHE_M&callback=initMap");
//     window.initMap = initMap;
//   }

//   const initMap = () => {
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });
//   }

//   return (
//     <main>
//       <div id="map"></div>
//     </main>
//   )
// }

// function loadScript(url) {
//   var index = window.document.getElementsByTagName("script")[0];
//   var script = window.document.createElement("script");
//   script.src = url;
//   script.async = true;
//   script.defer = true;
//   index.parentNode.insertBefore(script, index);
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';
import { sudanData } from './countryData/sudan';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    console.log("before the call");
    axios.get('http://localhost:5000/api/resources/countrydata/all')
      .then(res => {
        console.log("response: ");
        console.log(res);
      })
      .catch(error => {
        console.log('error: ');
        console.log(error);
      })
    console.log("after call");
  }

  render () {
    // const triangleCoords = [
    //   {lat: 15.5015341, lng: 32.5025565},
    //   {lat: 13.627617, lng: 25.310527},
    //   {lat: 12.0468312, lng: 29.6338605},
    // ];
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Map with React</h1>
        </header>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 15.5015341,
            lng: 32.5025565
          }}
          zoom={5}
        >
          <Polygon
          paths={sudanData}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD4bqhCOPhLTodbwADYYwuPDOwC0tYHE_M')
})(App)