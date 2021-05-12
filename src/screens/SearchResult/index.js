import React from 'react';
import {Dimensions, View} from 'react-native';
import RouteMap from '../../components/RouteMap'
import FlyseamTypes from '../../components/FlyseamTypes'

import {useRoute} from '@react-navigation/native'

const SearchResult = (props) => {
    const route = useRoute();
    console.log(route.params);

    const {originPlace, destinationPlace} = route.params;
    
    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
                <RouteMap origin={originPlace} destination={destinationPlace}/>
            </View>
            
            <View>
                <FlyseamTypes/>
            </View>
            

        </View>
    );
};

export default SearchResult;
