// src/pages/AppContainer/AppContainer.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "../../navigation/AppNavigation";

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default AppContainer;
