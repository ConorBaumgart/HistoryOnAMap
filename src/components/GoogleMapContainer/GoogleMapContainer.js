import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export const GoogleMapContainer = () => {
    return (
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD4bqhCOPhLTodbwADYYwuPDOwC0tYHE_M' }}
                defaultCenter={{
                    lat: 30,
                    lng: 20
                  }}
                defaultZoom={1}
            />
        </div>
    )
}
