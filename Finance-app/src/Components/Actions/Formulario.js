import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
const Formulario = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState();
  const [data, setData] = useState([]);

  const handleSave = async () => {
    const id = Math.random().toString();
    const item = { id, description, value: Number(value), date, type };

    try {
      const data = await AsyncStorage.getItem("data");
      const parsedData = data ? JSON.parse(data) : [];
      parsedData.push(item);
      await AsyncStorage.setItem("data", JSON.stringify(parsedData));
      setData(parsedData);
      setDescription("");
      setValue("");
      setDate("");
      setType("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleType = (selectedType) => {
    setType(selectedType ? 1 : 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerInput}>
        <TextInput
          style={styles.input}
          placeholder="Ex: dipensa mensal..."
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.headerInput}>
        <TextInput
          style={styles.input}
          placeholder="Ex: 2000"
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <View style={styles.headerInput}>
        <TextInput
          style={styles.input}
          placeholder="Ex: 01/01/2022"
          onChangeText={(text) => setDate(text)}
        />
      </View>
      <View style={styles.box}>
        <CheckBox value={type === 1} onValueChange={() => handleType(true)} />
        <Text style={{ marginLeft: 5 }}>Entrada</Text>

        <CheckBox value={type === 0} onValueChange={() => handleType(false)} />
        <Text style={{ marginLeft: 5 }}>Saida</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if ((data !== "") & (value !== "") & (value > 0) & (date !== "")) {
            handleSave();
            navigation.navigate("Home");
          } else {
            alert("Preencha os dados corretamente");
          }
        }}
      >
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "50%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerInput: {
    width: "90%",
    height: "6%",
    backgroundColor: "#fdfdfd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    marginLeft: 19,
  },
  button: {
    width: "80%",
    height: "5%",
    backgroundColor: "#3BA7B6",
    marginTop: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Formulario;
