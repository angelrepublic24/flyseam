import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';


const GOOGLE_MAPS_APIKEY = 'AIzaSyDFpWlXSB1tTxULBDEqc_Ramsz-cRu4xuM';

const RouteMap = ({origin, destination}) => {

    const originLocation = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
      };
    
    const destinationLocation = {
      latitude: destination.details.geometry.location.lat,
      longitude: destination.details.geometry.location.lng,
    };
    

        return (
                <MapView
                    style={{height: '100%', width: '100%'}}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={{
                    latitude: originLocation.latitude,
                    longitude: originLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}
                >
                    <MapViewDirections
                      origin={originLocation}
                      destination={destinationLocation}
                      apikey={GOOGLE_MAPS_APIKEY}
                      strokeWidth={5}
                      strokeColor="#24FEE0"
                    />
                    <Marker
                    coordinate={originLocation}
                    title={'Origin'}
                    />

                    <Marker
                    coordinate={destinationLocation}
                    title={'Destination'}
                    />
                </MapView>
        );
};

export default RouteMap;