import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Pj7TextInput from "./src/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ScreenTest from "./src/screens/ScreenTest";
import AppBar from "./src/components_rn_paper/AppBarLo";
import CustomNavigationBar from "./src/navigation/CustomNavigationBar";
import AppBarHeader from "./src/components_rn_paper/AppBarHeaderMenu";
import MenuItem from "./src/components_rn_paper/MenuItem";
import MenuBtn from "./src/components_rn_paper/MenuBtn";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>    
        <CustomNavigationBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
