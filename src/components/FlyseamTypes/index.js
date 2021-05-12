import React from 'react';;
import {View, Text, Pressable} from 'react-native';
import UberTypesRow from '../FlyseamTypesRow/index'
import styles from './styles'
import types from '../../assets/data/types';

const FlyseamTypes = (props)=>{

    const confirm = () =>{
        console.warn('Confirm')
    };

    return (
        <View style={{backgroundColor: '#FFF'}}>
            {types.map((type)=> (
            <UberTypesRow type={type} key={type.id}/>
            ))}
            
            <Pressable onPress={confirm} style={{
                backgroundColor: '#24FEE0',
                padding: 10,
                margin: 10,
                alignItems: 'center'
            }}>
                <Text style={{color: '#f3f3f3', fontWeight: 'bold'}}>
                    Confirm Flyseam
                </Text>
            </Pressable>
           
        </View>

    );
};

export default FlyseamTypes;