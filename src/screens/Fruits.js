import React from "react";
import {View, Button, ImageBackground, Text, StyleSheet, ScrollView, Image} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Fruits = ({navigation}) => {
    return(
     <ScrollView>
      <View>
        <Text style={styles.head}> Fruits </Text>
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QzVtirazHh0fUlbyO9c6ZrTAAz35hocqWA&usqp=CAU' }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Peach</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7SOlPu4OW_GIySF2DZ8YQzp2AMD5JQn4Tw&usqp=CAU' }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Mango</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIB-zGFH5OSgznzm-oeHpLUVLUTOdQRb8k5A&usqp=CAU' }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Banana</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dFI_Dyb5BsNVipPuqVQa00p-3zd8OLP81w&usqp=CAU' }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Papaya</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkrwL1VMu3sg0eFQP4JHU6CLJUWGzecdZtw&usqp=CAU' }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Guava</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HFNC9f4C_At-pEQqv2GMtueQDC9sPAVGvQ&usqp=CAU' }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Lichee</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBX0cFOuoSlOgz2RN1Dl7PJWmO3Tx7BsMuzw&usqp=CAU'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Plum</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-Kfd-q92AAbLInYvGo2k6N0UTQJQXU0xKg&usqp=CAU'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Pear</Text>
        </TouchableOpacity>
        </ScrollView> 
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
          <Image style={styles.desgn}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxmS2hI2KjKaC18QvdSd3uOjdgrgGpU9E_g&usqp=CAU'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Info')}>
          <Text style={styles.fname}>Orange</Text>
        </TouchableOpacity>
        </ScrollView>                         
      </View>

     </ScrollView>
    );
}

const styles = StyleSheet.create({
  desgn: {
      margin:16,
      width: 150,
      height: 100,
      borderRadius: 10
  },
  head:{
    color:"white",
    backgroundColor: "pink",
    fontSize: 25,
    padding:15
  },
  fname:{
    color:"grey",
    fontSize:30,
    margin:40
  }
}); 

export default Fruits;
