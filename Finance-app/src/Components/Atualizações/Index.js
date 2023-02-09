import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Atualizações = ({ data }) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={data.type === 1 ? styles.value : styles.expenses}>
          {showValue ? (
            data.type === 1 ? (
              `R$ ${data.value}`
            ) : (
              `R$ -${data.value}`
            )
          ) : (
            <View style={styles.skeleton}>
              <Feather style={styles.skeleton} name="eye-off" size={18} />
            </View>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },
  description: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    marginRight: 10,
  },
  expenses: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Atualizações;
