

import {  Text, View, StyleSheet, TouchableOpacity } from "react-native";
import  * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Intro() {
    const navigation = useNavigation();
  return (
    <View style={style.container}>  
        <View style={style.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                delay={300}
               source={require("../../../assets/logo502.png")}
                style={style.logo}
            /> 
        </View>

        <Animatable.View  delay={1200} animation="fadeInUp" style={style.containerText}>
            <View style={style.title}>
            <Text style={style.text}>Olá</Text>
            <Text style={style.text}>Transforme cada compra em uma experiência vantajosa!</Text>
            </View>

            
            <Text style={style.textSub}
            >Vamos  começar</Text>
            <TouchableOpacity style={style.button}
            onPress={( ) => navigation.navigate('Client')}>
                <Text style={style.text1}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}
            onPress={( ) => navigation.navigate('Define')}>
                <Text style={style.text1}>Registra-se</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B1415',
        alignItems: 'center',
        
    },
    logo:{
        width: 180,
        height: 180,
        borderRadius: 100,
    },
    containerLogo:{
        flex: 2,
        justifyContent: "center",
    },
    containerText:{
        flex: 1.3,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#242424',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title:{
        flex: 0.55,
        width: "90%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    text:{
        color: "#fff",
        fontFamily: "Roboto",
        fontSize: 22,
        textAlign: "center",
        marginHorizontal: 5,
    },text1:{
        color: "#fff",
        fontFamily: "Roboto",
        fontSize: 25,
        textAlign: "center",
        marginHorizontal: 5,
    },
    textSub:{
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 5,
    },
    button:{
        width: "90%",
        height: 50,
        backgroundColor: "#990405",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});