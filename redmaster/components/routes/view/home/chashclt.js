import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity } from "react-native";



const CashBackMenu = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <View style={styles.containerSearch}>
                    <Image source={require("../../../../assets/icon.png")} style={styles.logo} />
                    <TextInput style={styles.input} placeholder="Pesquisar" placeholderTextColor="#222" />
                </View>

                
            </View>

            <View style={styles.Saldo}>
                <View style={styles.cardSaldo}>
                    <View style={styles.clStyle1}>
                        <Text style={styles.txtSaldo}>Saldo</Text>
                        <Text style={styles.txtHoje}>Hoje: 29 outubro</Text>
                    </View>
                    <View style={styles.clStyle2}>
                        <Text style={styles.txtSifla}>R$</Text>
                        <Text style={styles.txtValue}>300</Text>
                    </View>
                </View>
            </View>

            <View style={styles.CashBackMenu}>
               <View style={styles.styleMenu}>
                  <TouchableOpacity style={styles.styleButton}
                  onPress={( ) => navigation.navigate('Extratoctl')}
                  >
                  <Feather name="dollar-sign" size={45}  color={"#047AF9"} /> 
                    <Text style={styles.styleText}>
                      Extrato
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.styleButton}>
                  <Feather name="shuffle" size={45}  color={"#047AF9"} /> 
                    <Text style={styles.styleText}>
                    Pendentes
                    </Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.styleMenu}>
               <TouchableOpacity style={styles.styleButton}>
                  <Feather name="map" size={45}  color={"#047AF9"} /> 
                    <Text style={styles.styleText}>
                      Locais
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.styleButton}>
                  <Feather name="layers" size={45}  color={"#047AF9"} /> 
                    <Text style={styles.styleText}>
                      Validações
                    </Text>
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
    search: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      margin: 10,
    },
    containerSearch: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "70%",
      backgroundColor: "#ffffff",
      borderRadius: 10,
      height: 50,
    },
    input: {
        width: "80%",
        height: 40,
        backgroundColor: "#d9d9d9",
        borderRadius: 7,
        fontSize: 20,
        paddingLeft: 10,
      },
      logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      profile: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#ffffff",
      },
      CashBackMenu:{
        flex:0.75,
        backgroundColor:"#990405",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderTopLeftRadius:35,
        borderTopRightRadius:35
      },
      Saldo:{
        flex:0.25,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:10
      },
      cardSaldo:{
        flex:0.90,
        backgroundColor:"#990405",
        width:"90%",
        borderRadius:10,
        padding:10,
        gap:8
      },
      clStyle1:{
        flex:0.46,
        width:"100%",
      },
      clStyle2:{
        flex:0.6,
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      txtSaldo:{
        fontSize:35,
      },
      txtSifla:{
        fontSize:20,
        position:"relative",
        top:15,
        left:-5
      }
      ,
      txtValue:{
        fontSize:55,
      },
      styleMenu:{
        flex:0.4,
        flexDirection:"row",
        width:"90%",
        justifyContent:"space-between",
        alignItems:"center",
        padding:15
      },
      styleButton:{
        height:"70%",
        width:"40%",
        backgroundColor:"#d9d9d9",
        borderRadius:15,
        justifyContent:"space-evenly",
        alignItems:"center"
      },
      styleText:{
        fontSize:23
      }
})
export default CashBackMenu;