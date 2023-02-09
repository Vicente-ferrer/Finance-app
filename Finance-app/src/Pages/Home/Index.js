import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Balances from "../../Components/Balances/Index";
import Header from "../../Components/Header/Index";
import Moviments from "../../Components/Atualizações/Index";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [isIncome, setIsIncome] = useState([]);
  const [isExpense, setIsExpense] = useState([]);

  useEffect(() => {
    if (data) {
      const entries = data.filter((item) => item.type === 1);
      const entryValues = entries.map((item) => item.value);
      const sumEntry = entryValues.reduce((acc, value) => acc + value, 0);
      setIsIncome(sumEntry);

      const out = data.filter((item) => item.type === 0);
      const outValues = out.map((item) => item.value);
      const sumOuts = outValues.reduce((acc, value) => acc + value, 0);

      setIsExpense(sumOuts);
    } else {
      alert(
        "Aviso importante!\n Se é a primeira vez que usa o app, por favor, adicione um item e reinicie o aplicativo"
      );
    }

    handleData();
  }, [data]);

  const handleData = async () => {
    const storedData = await AsyncStorage.getItem("data");
    const parsedData = JSON.parse(storedData);
    setData(parsedData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header welcome="Seja bem vindo" hadleClick={() => setVisible(true)} />
        <Balances saldo={isIncome} gastos={isExpense} />

        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Moviments data={item} />}
        />
      </View>
      <View style={styles.headerAdd}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate("Form")}
        >
          <Feather name="plus-circle" size={60} color="#3BA7B6" />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={false}>
        <TextInput placeholder="Novo nome" />
        <TouchableOpacity>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    width: "100%",
    height: "98%",
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  headerAdd: {
    height: "1%",
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btnAdd: {
    backgroundColor: "#fafafa",
    marginRight: 20,
    marginTop: "-30%",
    zIndex: 99,
  },
  title2: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "lightgray",
    padding: 12,
    margin: 10,
    borderRadius: 5,
  },
  box: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
export default Home;
