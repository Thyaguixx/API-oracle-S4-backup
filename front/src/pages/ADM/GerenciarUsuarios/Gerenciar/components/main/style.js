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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 30,
    },
    campocard1: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: '#8A8585',
        height: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto1card: {
        fontSize: 25,
        marginRight: 15,
        fontWeight: 'bold',
    },
    texto2card: {
        fontSize: 20,
    },
    campocard2: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: '#8A8585',
        height: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    title1: {
        fontSize: 17,
        color: '#C84734',
        marginRight: '60%',
        marginBottom: '5%',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        color: '#C84734',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    container1: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 30,
    },
    user: {
        width: 27,
        height: 22,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    user2: {
        width: 28,
        height: 20,
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 30,
    },
    campo1: {
        flexDirection: 'row', // alterado para linha
        elevation: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: '#8A8585',
        height: 60,
        width: '100%',
        alignItems: 'center', // centraliza verticalmente
        backgroundColor: '#FFF',
        marginBottom: 10,
    },
    texto1: {
        fontSize: 16, // ajuste de tamanho
        fontWeight: 'bold',
        color: '#313131',
    },
    texto2: {
        fontSize: 14, // ajuste de tamanho
        color: '#B5AEAE'
    },
    arrow:{
        width: 20,
        height: 20,
        marginBottom: '5%',
    }
});

export default styles;