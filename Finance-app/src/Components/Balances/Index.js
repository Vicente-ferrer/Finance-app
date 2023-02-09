import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Balances = ({ saldo, gastos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.Itemtitle}>Saldo/conta</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balances}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.Itemtitle}>Gastos/mês</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{`- ${gastos}`}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {},
  Itemtitle: {
    fontSize: 20,
    color: "#DADADA",
  },
  content: {
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#DADADA",
    marginRight: 6,
  },
  balances: {
    fontSize: 22,
    color: "green",
  },
  expenses: {
    fontSize: 22,
    color: "red",
  },
});
export default Balances;
