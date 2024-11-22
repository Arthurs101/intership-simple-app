import React, { useState , useReducer} from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PasswordInput from "../../componets/atoms/PasswordInput";
import styles from "./styles";
enum ActionType {
  SET_VALUE = "SET_ATTRIBUTE",
  SET_ERROR = "SET_ERROR_ATTRIB"
}

interface dataState {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

interface dataAction {
  type: ActionType;
  value: string | boolean;
  key : string
}


const RegisterScreen = () => {
  const navigation = useNavigation();

  function setData(state: dataState, action: dataAction) {
    const {type, value,key} = action;
    switch(type) {
      case ActionType.SET_VALUE:
        return {
          ...state, [key]: value 
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(setData, { email: "" ,password : "", confirmPassword: "",showPassword : false, showPasswordConfirm: false});

  const handleRegister = () => {
    if (!state.email || !state.password || !state.confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    if (state.password !== state.confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    navigation.navigate("Home", {email: state.email});
  };

  const handleInputChange = (key: keyof dataState, value: string | boolean) => {
    dispatch({ type: ActionType.SET_VALUE, key, value });
  };



  return (
    <React.Fragment>
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>
      <Text style={styles.title}>Crea Tu Cuenta Y Comienza A Aprender</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.noMarginInput}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          value={state.email}
          onChangeText={(value) => {
            handleInputChange("email", value);
          }}
          keyboardType="email-address"
        />
      </View>
      <PasswordInput
        value={state.password}
        onChangeText={(value) => handleInputChange("password", value)}
        showPassword={state.showPassword}
        togglePasswordVisibility={() =>
          handleInputChange("showPassword", !state.showPassword)
        }
        placeholder="Ingresa Tu Contraseña"
      />
      <PasswordInput
        value={state.confirmPassword}
        onChangeText={(value) => handleInputChange("confirmPassword", value)}
        showPassword={state.showPasswordConfirm}
        togglePasswordVisibility={() =>
          handleInputChange("showPasswordConfirm", !state.showPasswordConfirm)
        }
        placeholder="Confirma Tu Contraseña"
      />        
      <Text style={styles.centeredText}>
          Al Hacer Clic En 'Comenzar', Acepto Los  
          <Text style={styles.link} >Términos De Uso</Text>
          Y Reconozco Que Mi Información Personal Se Utilizará De Acuerdo Con La 
          <Text style={styles.link} >Política De Privacidad</Text>
          De Quasar. 
      </Text>  
      <Text style={styles.centeredText}>
      Ya tienes una cuenta? 
      {
        " "
      }
      {<Text
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        Iniciar Sesión
      </Text>}
      </Text>
      
      <View style={styles.lowerContainer}>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
      </View>
    </View>
    </React.Fragment>
  );
};
export default RegisterScreen