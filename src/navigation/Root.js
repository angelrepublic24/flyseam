import React from 'react'
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';

const Drawer =createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{props.name}</Text>
    </View>
)

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
           <Drawer.Navigator drawerContent={
               ( props) => (
               <CustomDrawer {...props}/>)
            }>
               <Drawer.Screen name="Home" component={HomeNavigator}/>
               {/* Trips */}
               <Drawer.Screen name="Your Trips">
                    {() =><DummyScreen name={"Your Trips"}/>}
               </Drawer.Screen>

                {/* Help */}
               <Drawer.Screen name="Help">
                    {() =><DummyScreen name={"Help"}/>}
               </Drawer.Screen>

                {/* Wallet */}
               <Drawer.Screen name="Wallet">
                    {() =><DummyScreen name={"Wallet"}/>}
               </Drawer.Screen>

                {/* Help */}
               <Drawer.Screen name="Settings">
                    {() =><DummyScreen name={"Settings"}/>}
               </Drawer.Screen>
           </Drawer.Navigator>
        </NavigationContainer>

    );

};

export default RootNavigator;