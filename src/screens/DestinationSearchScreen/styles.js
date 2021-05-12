import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
        backgroundColor: '#fff',
      },

      textInput: {
        padding: 5,
        backgroundColor: '#eee',
        color: 'black',
        marginVertical: 5,
        marginLeft: 10,
        marginLeft: 20
      },

      listView: {
        position: 'absolute',
        top: 110,
      },

      separator: {
        backgroundColor: '#efefef',
        height: 2,
      },
      autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10.
      },

      iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 30
      },
      
      locationText: {

      },
      circle: {
        width: 5,
        height: 5,
        position: 'absolute',
        backgroundColor: 'black',
        top: 20,
        left: 15,
        borderRadius: 5
      },
      line: {
        width: 1,
        height: 50,
        position: 'absolute',
        backgroundColor: '#c4c4c4',
        top: 28,
        left: 17,
      },
      square: {
        width: 5,
        height: 5,
        position: 'absolute',
        backgroundColor: 'black',
        top: 80,
        left: 15,
      }
})

export default styles;