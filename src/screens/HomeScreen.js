import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';

const HomeScreen= ({navigation})=>{
    return(
        <View style={{flex:1}}>
            <View style={styles.first}>
                <Image style={styles.img} source={require('../../assets/image1.jpg')}/>
            </View>

            <View style={styles.second}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('State')}}>
                    <Image style={styles.img2} source={require('../../assets/img1.jpeg')} />
                    <Text style={styles.text}>State Wise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Crop')}}>
                    <Image style={styles.img2} source={require('../../assets/img2.jpeg')} />
                    <Text style={styles.text}>Crops</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Flowers')}}>
                    <Image style={styles.img2} source={require('../../assets/img3.jpeg')} />
                    <Text style={styles.text}>Flowers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Fruit')}}>
                    <Image style={styles.img2} source={require('../../assets/img4.jpeg')} />
                    <Text style={styles.text}>Fruits</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    first:{
        backgroundColor: '#416EB5',
        height: (Dimensions.get('screen').height/3),
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    second: {
        
        backgroundColor: '#D3D3D3',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: (Dimensions.get('screen').height/3 * 2),
        flexWrap: 'wrap'
    },
    button: {
        height: 150,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 7,
        marginTop: 30,
        marginBottom: 10,
        justifyContent: 'center',
        
    },
    text: {
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        color: '#008b8b',                    // d5c5c#c
        fontSize: 20,
        backgroundColor: '#ecc6d9',
        //marginBottom: 0
    },
    img: {
        width: 150,
        height:150,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'white',
        
    },
    img2:{
        height: 125,
        width: 150,
        //borderRadius: 7,
        resizeMode: "stretch"
    }
});
export default HomeScreen;