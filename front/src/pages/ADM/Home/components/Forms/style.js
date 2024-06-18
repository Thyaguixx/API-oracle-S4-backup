import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#F3F1F1',
    alignItems: 'center',
    marginTop: 0,
    borderTopLeftRadius:30,
    borderTopRightRadius: 30,
 },
 form:{
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
 },
 formText: {
    color: '#C84734',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 10, 
 },
 buttonMenu: {
    borderRadius:10,
    borderColor:'#8A8585',
   //  borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '91.5%',
    height: '15%',
    backgroundColor: '#FFFFFF',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 5,
    elevation: 4,
 },
 buttonContainer: {
   flexDirection: 'row',
   alignContent: 'center',
   justifyContent: 'center',
 },
 buttonImage: {
   marginLeft:26,
   flex:1
 },
 buttonText: {
   flex:3,
   marginEnd: 10,
   marginBottom: 3,
   justifyContent:'center'
 },
 titleButtonMenu: {
    fontSize: 20,
    color: '#2F2A4E',
    fontWeight: 'bold'
 },
 subtitleButtonMenu: {
   fontSize: 16,
   color: '#B5AEAE',
},
icon: {
   width: 40,
   height:40,
   borderRadius: 8
},
icon2: {
   width: 36,
   height:40,
},
icon3: {
   width: 39,
   height:33,
   
}
})


export default styles