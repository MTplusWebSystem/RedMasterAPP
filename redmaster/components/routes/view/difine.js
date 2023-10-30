import React from "react";
import {  Text, View, StyleSheet ,TextInput,TouchableOpacity } from "react-native";
import  * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function ToDifine() {
  const navigation = useNavigation();
  return (
    <View style={style.container} >

      <View style={style.card}>

      <Animatable.View delay={200} animation="fadeInLeft" style={style.form}>


       <TouchableOpacity style={style.button}
            onPress={( ) => navigation.navigate('ResClient')}>
                <Text style={style.text1}>Associado</Text>
       </TouchableOpacity>
      </Animatable.View>

      <Animatable.View delay={400} animation="fadeInLeft" style={style.form}>

       <TouchableOpacity style={style.button}
            onPress={ ( ) => navigation.navigate('ResCompany')}>
                <Text style={style.text1}>Conveniado</Text>
       </TouchableOpacity>
      </Animatable.View>

      </View>
     
     
     


     
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B1415',
        alignItems: 'center',
        justifyContent: "center",
    },
   
    text:{
        color: "#fff",
        position: "relative",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    card:{
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#990405',
    },
    form:{
        flex: 0.10,
        width: "80%",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    button:{
        width: "80%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text1:{
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",
    },
    input:{
        width: "80%",
        height: 50,
        backgroundColor: "#121212",
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
    }
});