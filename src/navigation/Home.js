import React from 'react'
import { Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import DestinationSearchScreen from '../screens/DestinationSearchScreen';
import SearchResult from '../screens/SearchResult';


const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
            <Stack.Navigator 
            screenOptions={{headerShown: false}}
            >
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"DestinationSearch"} component={DestinationSearchScreen}/>
                <Stack.Screen name={"SearchResult"} component={SearchResult}/>

            </Stack.Navigator>

    );

};

export default HomeNavigator;