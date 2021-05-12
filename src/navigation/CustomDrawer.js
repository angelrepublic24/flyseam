import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';


import {useRoute} from '@react-navigation/native'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: 'black', padding: 15}}>
                {/* User Row */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 10
                }}>
                    <View style={{
                        backgroundColor: '#cacaca', 
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10
                    }}/>
                    <View>
                        <Text style={{color: 'white', fontSize: 22}}>Angel Almonte</Text>
                        <Text style={{color: 'lightgrey'}}>5.00 </Text>

                    </View>
                </View>

                {/* Messages Row */}
                <View style={{
                    borderTopWidth: 1, 
                    borderTopColor: '#919191', 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#919191',
                    paddingVertical: 10,
                    marginVertical: 15
                    }}>
                        <Pressable onPress={() => {console.warn('Pressed Messages')}}>
                            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
                        </Pressable>
                </View>

                {/* Do more */}
                <Pressable onPress={() => {console.warn('Pressed Do more with your account')}}>
                    <Text style={{color: '#dddddd', paddingVertical: 5}}>Do more with your account</Text>
                </Pressable>

                {/* Make Money  */}
                <Pressable onPress={() => {console.warn('Pressed Make money')}}>
                    <Text style={{color: 'white', paddingVertical: 5}}>Make money driving</Text>
                </Pressable>

            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
     
    );
};

export default CustomDrawer;
