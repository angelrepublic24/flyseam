import React, {useState, useEffect} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {View, TextInput, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';
import PlaceRow from './PlaceRow';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearchScreen = (props)=>{
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const checkNavigation = () =>{
      if(originPlace , destinationPlace){
        navigation.navigate('SearchResult', {
          originPlace,
          destinationPlace,
        })
      }  
    }
    useEffect(() => {
      checkNavigation()
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
           <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder="From"
                    onPress={(data, details = null) => {
                      setOriginPlace({data, details});
                     }}
                     enablePoweredByContainer={false}
                     currentLocation={true}
                     currentLocationLabel='Current location'                     
                     suppressDefaultStyles
                     styles={{
                       textInput: styles.textInput,
                       container: styles.autocompleteContainer,
                       listView: styles.listView,
                       separator: styles.separator,
                      }}
                    fetchDetails
                    query={{
                      key: 'AIzaSyDFpWlXSB1tTxULBDEqc_Ramsz-cRu4xuM',
                      language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data}/>}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
              />


                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                      setDestinationPlace({data, details});
                     console.log(data, details);
                     }}
                     enablePoweredByContainer={false}
                     suppressDefaultStyles
                     styles={{
                      textInput: styles.textInput,
                      container: {
                       ...styles.autocompleteContainer,
                        top: 55,
                      },
                      separator: styles.separator
                    }}
                     fetchDetails
                    query={{
                      key: 'AIzaSyDFpWlXSB1tTxULBDEqc_Ramsz-cRu4xuM',
                      language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data}/>}

                />
                
           </View>

          {/* Circle near Origin input */}
            <View style={styles.circle}/>
          {/* Line between dots */}
          <View style={styles.line}/>
          {/* Square near Destination input */}
          <View style={styles.square}/>

        </SafeAreaView>
        

    );
};

export default DestinationSearchScreen;