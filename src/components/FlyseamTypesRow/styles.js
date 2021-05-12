import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain'
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color: '#5d5d5d'
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,

    }
})

export default styles;