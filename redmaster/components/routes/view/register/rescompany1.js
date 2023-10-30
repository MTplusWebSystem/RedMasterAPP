import React, { useState } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const FormCompany = () => {
  const [inputs, setInputs] = useState({
    nome: "",
    sobrenome: "",
    rg: "",
    cpf: "",
    endereco: "",
    numero: "",
    cidade: "",
    estado: "",
    data: "",
    whatsapp: "",
  });

  const handleInputChange = (field, text) => {
    setInputs({ ...inputs, [field]: text });
  };
  const handleRadioButtonChange = (value) => {
    setInputs({ ...inputs, genero: value });
  };

  const handleButtonPress = () => {
    const company = {
      "etapa1":inputs
    }
    console.log(company)
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(text) => handleInputChange("nome", text)}
          value={inputs.nome}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          onChangeText={(text) => handleInputChange("sobrenome", text)}
          value={inputs.sobrenome}
        />

         <RadioButtonGroup
          containerStyle={{ marginBottom: 10, flexDirection: "row", gap: 25 }}
          selected={inputs.genero}
          onSelected={(value) => handleRadioButtonChange(value)}
          radioBackground="#242424"
        >
          <RadioButtonItem
            value="male"
            label={<Text style={{ color: "#ffffff", fontSize: 20 }}>Homen</Text>}
          />
          <RadioButtonItem
            value="female"
            label={<Text style={{ color: "#ffffff", fontSize: 20 }}>Mulher</Text>}
          />
        </RadioButtonGroup>

        <TextInput
          style={styles.input}
          placeholder="RG"
          onChangeText={(text) => handleInputChange("rg", text)}
          value={inputs.rg}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          onChangeText={(text) => handleInputChange("cpf", text)}
          value={inputs.cpf}
        />
         <TextInput
          style={styles.input}
          placeholder="Data: 18/09/2003"
          onChangeText={(text) => handleInputChange("data", text)}
          value={inputs.data}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          onChangeText={(text) => handleInputChange("endereco", text)}
          value={inputs.endereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          onChangeText={(text) => handleInputChange("numero", text)}
          value={inputs.numero}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={(text) => handleInputChange("cidade", text)}
          value={inputs.cidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          onChangeText={(text) => handleInputChange("estado", text)}
          value={inputs.estado}
        />
       
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          onChangeText={(text) => handleInputChange("whatsapp", text)}
          value={inputs.whatsapp}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}
            onPress={( ) => navigation.navigate('Define')}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={() => { handleButtonPress(); navigation.navigate('Company1'); }}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B1415",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    width: "48%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FormCompany;
