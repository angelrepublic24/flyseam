import React from 'react';;
import {View, Text, Image} from 'react-native';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'


const FlyseamTypesRow = (props)=>{

    const {type} = props

    const returnImage = () => {
        if (type.type === 'FlyseamX') {
            return require('../../assets/images/FlyseamX.jpeg');
          }
          if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg');
          }
          return require('../../assets/images/FlyseamXL.jpeg');
    }
    return (
        <View style={styles.container}>

            {/* {image} */}
            <Image 
            style={styles.image} 
            source={returnImage()}
            />


           <View style={styles.middleContainer}>
            <Text style={styles.type}>
                {type.type}
                <Ionicons name={'person'} size={12}/>
                2
            </Text>
            <Text style={styles.time}>
                5:49PM drop off
            </Text>
           </View>

           <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
            <Text style={styles.price}>est. ${type.price}</Text>
           </View>
        </View>

    );
};

export default FlyseamTypesRow;