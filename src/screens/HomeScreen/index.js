import React from 'react';;
import {View, Text, Dimensions} from 'react-native';;
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import {useRoute} from '@react-navigation/native'



const HomeScreen = (props)=>{
    return (
        <View style={{backgroundColor: '#fff'}}>
            <View style={{height: Dimensions.get('window').height - 450}}>
                <HomeMap />
            </View>
            {/* Covid Message */}
            <CovidMessage/>
            {/* Bottom Comp */}
            <HomeSearch/>
        </View>

    );
};

export default HomeScreen;