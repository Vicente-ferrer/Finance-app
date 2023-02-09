import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 18
  : 64;

const Header = ({ welcome, name, handleClick }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
          {welcome}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3BA7B6",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  user: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginLeft: "-30%",
  },
  btnUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255, 255,255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
});

export default Header;
