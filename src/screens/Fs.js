import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking} from 'react-native';
import AppContent from '../context/AppContext';
//import YoutubePlayer from 'react-native-youtube-iframe'
//import YouTubePlayer from 'react-native-youtube-sdk';
//import WebView from 'react-native-webview';

const Fs = ({navigation})=>{
    const {dataa} = useContext(AppContent);

    return(
        <View>
            <FlatList
                data= {dataa}
                keyExtractor={item=>item.name}
                renderItem={({item})=>{
                    return (
                        <View style={styles.second}>
                           {/*<YouTubePlayer
                                ref ={ref=>{this.YouTubePlayer= ref}}        Linking.openURL(item.url)
                                //onError={e=> console.log(e)}
                                style ={{width: "100%", height: "100%"}}
                                autoPlay={true}
                                fullscreen ={true}
                                videoId="phsMXM4vtz8"
                           /> */}
                            
                            <TouchableOpacity style={styles.button} onPress={()=>{ navigation.navigate('Fss', {id: item.id}) }}>
                                <Image style={styles.img} source={item.image} />  
                                <Text style={styles.text}> {item.common}</Text>
                            </TouchableOpacity>
                        </View>
                );
            }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    second: {
        
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        color: '#d5c5c5c',                    // d5c5c#c
        fontSize: 20,
    },
    button: {
        height: 150,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 30,
        marginBottom: 10,
        justifyContent: 'center',
    },
    img :{
        height: 125,
        width: 150,
        resizeMode: "stretch"
    }
});
export default Fs;