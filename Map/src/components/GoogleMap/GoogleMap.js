import React from 'react';

export const GoogleMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    return (
      <div class="world-map">
        {map}
      </div>
    )
}