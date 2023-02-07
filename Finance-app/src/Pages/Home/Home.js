import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Balances from "../../Components/Balances/Balances";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header name="Vicente Ferreira" />
      <Balances saldo="8000,000" gastos="900,00" />
      <Text style={styles.title}>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
});
export default Home;
