import React from "react";
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet,  Image,TouchableOpacity } from "react-native";


const InviteCode = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.section1}>
                <Image style={styles.IconStyle}/>
                <Feather name="refresh-ccw" size={45}  color={"#047AF9"} /> 
                <Image style={styles.IconStyle}/>
              </View>
              <View style={styles.section2}>
              <Text style={styles.styleDesclip}>
              O código de 6 dígitos gerado valida o cashback entre você e o local da compra, assegurando autenticidade e segurança nas transações.
              </Text>
              <View style={styles.InviteCode} > 
                <Text style={styles.styleCode}>
                    X X X X X X
                </Text>
              </View>
              <TouchableOpacity style={styles.styleButton}>
                 <Text style={styles.styleGen}>Gerar</Text>
              </TouchableOpacity>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      alignItems: "center",
      justifyContent: "center",
    },
    card:{
      flex: 0.7,
      width:"80%",
      backgroundColor: "#e9e9e9",
      alignItems: "center",
      justifyContent: "center",
      borderRadius:15
    },
    section1:{
        flex:0.3,
        width:"100%",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    section2:{
        flex:0.70,
        width:"100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#C50002",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    IconStyle:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor: "#5FD5BD",
    },
    InviteCode:{
        height:45,
        width:"75%",
        backgroundColor:"#e9e9e9",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius:15
    },
    styleCode:{
        fontSize:30
    },
    styleGen:{
        fontSize:30,
        color:"#ffffff"
    },
    styleDesclip:{
        fontSize:20,
        color:"#ffffff"
    },
    styleButton:{
        height:45,
        width:"60%",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius:15,
        backgroundColor:"#242424"
    }

})

export default InviteCode