import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AppContent from '../context/AppContext';


const StateWiseScreen = ({navigation})=>{
    const {data} = useContext(AppContent);

    return(
        <View>
            <FlatList
                data= {data}
                keyExtractor={state=>state.name}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity style={styles.view} onPress={()=>{navigation.navigate('Details', {id: item.id}) }}>
                            <Text style={styles.text}> {item.name} </Text>
                        </TouchableOpacity>
                    
                );
            }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    view:{
        height: 50,
        borderBottomColor: "#D3D3D3",       //'#D3D3D3',
        borderBottomWidth: 1,
        //backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 0
    },
    text:{
        fontFamily: 'sans-serif-condensed',  
        margin: 10,
        fontSize: 20,
        marginLeft: 15,
        letterSpacing: 2,
        //paddingBottom: 20,
        //backgroundColor: 'gray'
    }
});
export default StateWiseScreen;