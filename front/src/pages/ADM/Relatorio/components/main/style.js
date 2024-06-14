import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: '#F3F1F1',
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: -1
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        color: '#C84734',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    icon2: {
        width: 22,
        height: 25,
        marginRight: 10 
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 30,
    },
    campo1: {
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: '#8A8585',
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        marginBottom: 10,
        elevation: 2,
    },
    texto1: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrow:{
        width: 20,
        height: 20,
        marginBottom: '5%',
    }
});

export default styles;