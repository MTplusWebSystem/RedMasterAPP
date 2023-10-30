import { Feather } from '@expo/vector-icons';
import {  Text, View, StyleSheet ,TextInput,TouchableOpacity } from "react-native";
import  * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function CompanyLogin() {
  const navigation = useNavigation();
  return (
    <View style={style.container} >
      <View style={style.Title}>
        <Animatable.Text animation="fadeInLeft" style={style.text}>Bem-vindo(a)</Animatable.Text>
        <TouchableOpacity style={style.button2}
            onPress={( ) => navigation.navigate('Client')
            }>
                <Feather name="user" size={35} color={"#242424"} />
        </TouchableOpacity>
      </View>
      <Animatable.View  animation="fadeInUp" style={style.form}>
        <TextInput style={style.input} placeholder="Certificado" placeholderTextColor="#ffffff" />
        <TextInput style={style.input}  placeholder="Nome da empressa" placeholderTextColor="#ffffff" />
        <TextInput style={style.input}  placeholder="Digite seu Senha" placeholderTextColor="#ffffff" />
        <TouchableOpacity style={style.button}
            onPress={( ) => navigation.navigate('CompanyBar')}>
                <Text style={style.text1}>Acessar</Text>
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
        justifyContent: "center",
    },
    Title:{
        flex: 0.7,
        justifyContent: "center",
    },
    text:{
        color: "#fff",
        position: "relative",
        left: -19,
        fontSize: 40,
        fontWeight: "bold",
    },
    form:{
        flex: 1.5,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#660405',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button:{
        width: "80%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    button2:{
        width: 60,
        height: 50,
        position:"relative",
        top:55,
        left:220,
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
        backgroundColor: "#990405",
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
    }
});