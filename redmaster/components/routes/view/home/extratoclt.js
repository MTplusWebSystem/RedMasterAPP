import React from "react";
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity, ScrollView } from "react-native";




const ExtratoClt = () => {
  const categories = ["Todos", "Farmácias", "Mercados", "Pizzaria", "Shoppings", "Mecânica"  ];

const generateRandomPercentage = () => {
  return Math.floor(Math.random() * 100);
};
const generateCards = () => {
  return categories.map((category, index) => {
    const percentage = generateRandomPercentage();
    return (
      <View key={index} style={styles.card}>
      <View style={styles.value1}>
        
      <Image source={{ uri: 'https://i.imgur.com/uBtfRHK.png/80x80' }} style={styles.company} />
      </View>
      <View style={styles.value2}>
      <Text style={styles.marca}> Bentão surper mercado</Text>
      <Text style={styles.tel}> <Feather name="phone" size={25} rotate={'30deg'} color={"#047AF9"} />: (011) 9 9999-9999</Text>
      <Text style={styles.map}> <Feather name="map" size={25}  color={"#047AF9"} />   Localizar</Text>
      </View>
      <View style={styles.value1}>
      <View style={styles.cashback}>
          <Text style={styles.textCashback}>{percentage}%</Text>
      </View>
      </View>
      </View>
    );
  });
};
    return (
    <View style={styles.container}>
     <ScrollView>
     {generateCards()}
     </ScrollView>
    </View>
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      alignItems: "center",
      justifyContent: "center",
    },

  card: {
    alignItems: "center",
    justifyContent:"space-between",
    position:"relative",
    flexDirection: "row",
    borderRadius: 10,
    marginTop:25,
    backgroundColor: "#550405",
    width: "95%",
    height: 115,
    margin: 10,
  },
  value1:{
    height:"100%",
    width:"25%",
    justifyContent:"center",
    alignItems:"center",
  },
  value2:{
    height:"100%",
    width:"50.5%",
    justifyContent:"space-evenly",
    alignItems:"center",
  },
  text3: {
    fontSize: 20,
    borderRadius: 6,
    width: "90%",
    textAlign: "center",
    backgroundColor: "#B500FF",
    fontWeight: "bold",
  },
  text4: {
    fontSize: 15,
    borderRadius: 4,
    width: "90%",
    textAlign: "center",
    backgroundColor: "#8C8C8C",
    color: "#BDFF00",
    fontWeight: "bold",
  },
  companies: {
    flex: 5,
    justifyContent: "center",
    backgroundColor: "#7B1415",
    width: "100%",
  },
 
  category: {
    flex: 0.38,
    width: "90%",
    padding: 5,
    backgroundColor: "#660405",
    borderRadius: 5,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itens: {
    flexDirection: "row",
  },
  categoryStyle: {
    height: 35,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    color: "#ffffff",
    marginLeft: 20,
    borderRadius: 5,
  },
  company:{
    height:80,
    width:80,
    backgroundColor:"#ffffff",
    position:"relative",
    borderRadius:5,
  },
  cashback:{
    height:65,
    width:65,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#121212",
    position:"relative",
    borderRadius:12,
  },
  textCashback:{
    color:"#ffffff",
    fontSize:25,
  },
  marca:{
    position:"relative",
    width:"90%",
    fontSize:16,
    color:"#ffffff",
    top:-5,
    textAlign:"center",
  },
  tel:{
    position:"relative",
    width:"100%",
    fontSize:16,
    color:"#ffffff",
    top:-5,
    textAlign:"center",
  },
  map:{
    position:"relative",
    width:"70%",
    fontSize:16,
    color:"#ffffff",
    textAlign:"center",
  },
})

export default ExtratoClt;