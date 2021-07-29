import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking} from 'react-native';
import AppContent from '../context/AppContext';

const Fss = ({navigation})=> {
    const {dataa} = useContext(AppContent);
    const item = dataa.find((item)=> item.id === navigation.getParam('id'));

    return(
        <View style={styles.one}>
            <View >
                <Text style={styles.two}>{item.text}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{Linking.openURL(item.url)}}>Click here</TouchableOpacity>
        </View>
        
    );
};
const styles = StyleSheet.create({
    one:{
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'orange',
        flex: 1
    },
    btn: {
        
        height: 55,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
        marginHorizontal: 40,
        borderColor: 'orange',
        borderWidth: 1,
        color: 'white',
        backgroundColor: '#416EB5',
        marginTop: 20
  },
})
export default Fss;