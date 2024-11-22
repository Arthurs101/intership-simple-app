// src/modules/Home/pages/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { StaticScreenProps } from '@react-navigation/native';

type Props = StaticScreenProps<{
  email: string;
}>;
const HomeScreen = ({ route }: Props) => {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.email}>Your email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeScreen;
