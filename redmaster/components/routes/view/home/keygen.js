import React from "react";
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity } from "react-native";


const InviteCode = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.section1}>

              </View>
              <View style={styles.section2}>

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
    },
    section2:{
        flex:0.70,
        width:"100%",
        backgroundColor: "#C50002",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    }
})

export default InviteCode