import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import cars from '../../assets/data/cars'
import MapViewDirections from 'react-native-maps-directions';




const HomeMap = (props) => {
    

    const returnImage = (type) => {
        if (type === 'FlyseamX') {
            return require('../../assets/images/top-FlyseamX.png');
          }
          if (type === 'Comfort') {
            return require('../../assets/images/top-Comfort.png');
          }
          return require('../../assets/images/top-FlyseamXL.png');
        }

        return (
                <MapView
                    style={{height: '100%', width: '100%'}}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}
                >
                    {cars.map((car)=>(
                        <Marker
                        key={car.id}
                        coordinate={{latitude: car.latitude, longitude: car.longitude}}>
                            <Image 
                                style={{
                                    height: 25, 
                                    width: 25, 
                                    resizeMode: 'contain',
                                    transform: [{
                                        rotate: `${car.heading}deg`
                                    }]
                                }} 
                                source={returnImage(car.type)}/>

                        </Marker>
                    ))}
                </MapView>
        );
};

export default HomeMap;