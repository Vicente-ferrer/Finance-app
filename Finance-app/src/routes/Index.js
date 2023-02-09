import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home/Index";
import Form from "../Components/Actions/Formulario";

import Header from "../Components/Header/Index";
const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Form"
        options={{ headerShown: false }}
        component={Form}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
