// src/navigation/AppNavigation/index.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../../modules/Auth/pages/Register";
import LoginScreen from "../../modules/Auth/pages/Login";
import HomeScreen from "../../modules/Home/pages/";
import { RootStackParamList } from "../types/NavigationTypes";


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
