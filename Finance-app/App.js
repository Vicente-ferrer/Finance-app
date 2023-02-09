import AppRoutes from "./src/routes/Index";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes></AppRoutes>
    </NavigationContainer>
  );
}
