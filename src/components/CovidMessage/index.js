import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const CovidMessage = (props) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Travel only is necessary </Text>
                <Text style={styles.text}>Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.</Text>
                <Text style={styles.learMore}>Learn more</Text>
            </View>
        );
};

export default CovidMessage;