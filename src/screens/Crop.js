import React, { Component } from "react";
import {View, Button, ImageBackground, Text, StyleSheet, ScrollView, Image} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
//import CropScreen from "./CropScreen";
//import Result from "./InfoScreen";

const Crop = ({navigation}) => {
  
  return (
    <ScrollView>
        <View>
            <Text style={styles.head}>Crops</Text></View>

            <Text style = {styles.txt}>Rabi</Text>
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}> 

            <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
             <Image style = {styles.text}
             source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRfNvku08IVbrgnf_WE89ByKGKcuWUaHitA&usqp=CAU'}} />
             <Text style={styles.name}>Wheat</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
             <Image style = {styles.text}
             source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN84GhgfVKYggwAy7rC8_O0tHhm6NOjc_Uw&usqp=CAU'}} />
             <Text style={styles.name}>Barley</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}>
             <Image style = {styles.text} 
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzImtlC7Q99NluncqJhdC_ph93vaUMbQi2JQ&usqp=CAU' }}/>
             <Text style={styles.name}>Mustard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}> 
             <Image style = {styles.text} 
             source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8Ks7gItNmXlvXi1wQOyqmR44R6NmdeAWOQ&usqp=CAU'}} />
             <Text style={styles.name}>Linseed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}> 
             <Image style = {styles.text} 
             source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTritU4iXLW6UOSVC06nFzz0PGtQXwCXdIHLQ&usqp=CAU' }} />
             <Text style={styles.name}>Gram</Text>
            </TouchableOpacity>
            </ScrollView>

            <Text style = {styles.txt}>Kharif</Text>
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}>
             <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}>
               <Image style = {styles.text}
               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9I658I4wn_MvXfC1k1VHyY0AtPbiuFALGw&usqp=CAU' }} />
               <Text style={styles.name}>Rice</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}>
               <Image style = {styles.text}
               source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0WWnFWaOurdldEJvC_e1gqhi1-fB8hwsQA&usqp=CAU'}} />
               <Text style={styles.name}>Urad</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}>
               <Image style = {styles.text}
               source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9ZK_ktG3OJeJ-URND7jaWPMEr-NoMdKSVg&usqp=CAU'}} />
               <Text style={styles.name}>Black gram</Text>
             </TouchableOpacity>  
             <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}> 
               <Image style = {styles.text}
               source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAP6DwF3vzyGUZbm6a9C6LzFnMQ5nrhTrsQ&usqp=CAU'}} />
               <Text style={styles.name}>Bajra</Text>
             </TouchableOpacity> 
             <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}>
               <Image style = {styles.text}
               source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB4k7zoJlSqA-Pgam5fDVggh-WAfhgzl8gw&usqp=CAU'}} />
               <Text style={styles.name}>Maize</Text>
             </TouchableOpacity>
            </ScrollView>

            <Text style = {styles.txt}>Whole year</Text>
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}> 
             
            <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
             <Image style = {styles.text}
             source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQfIyE53ZcezM4DQ4DnNBv5TsFjkRUtK82Q&usqp=CAU'}} />
             <Text style={styles.name}>Okra/Bindi</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
             <Image style = {styles.text}
             source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiy4dAuPKJzc--7DeOQtpvEv4mjjzr0huUA&usqp=CAU'}} />
             <Text style={styles.name}>Tomatoes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}>
             <Image style = {styles.text} 
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UF53TYd-0CTBZVOYxmblZZbIgh8aATxqNQ&usqp=CAU' }}/>
             <Text style={styles.name}>Sweet Potato</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}> 
             <Image style = {styles.text} 
             source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOINiLdkgxJApuQlhrtjP_YRslNmalULVvog&usqp=CAU'}} />
             <Text style={styles.name}>Sugarcane</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CropPage')}> 
             <Image style = {styles.text} 
             source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC14q5fs7cxDnS2t0cws6vef6Wo9FjevHl8Q&usqp=CAU' }} />
             <Text style={styles.name}>Haldi</Text>
            </TouchableOpacity>
            </ScrollView>
        <View  style={{ marginTop:20, backgroundColor:"green"}}> 
           <Text style={{ padding:20, fontSize:15, alignSelf: 'center', color: "lightgreen" }}>
               copyright 2021, Haldhar
           </Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    text: {
        margin:6,
        width: 200,
        height: 130,
        borderRadius: 5
    },
    txt:{
        fontSize:20,
        margin: 5,
        alignSelf: "center",
        color: "purple"
    },
    head:{
        color: "#fff",
        fontSize: 30,
        padding: 10,
        backgroundColor: '#9fcf49'
    },
    name:{
      color: "grey", alignSelf: 'center'
    }
  });

export default Crop;


