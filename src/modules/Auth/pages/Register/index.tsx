import React, { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import PasswordInput from "../../componets/atoms/PasswordInput";
import styles from "./styles";

enum ActionType {
  SET_VALUE = "SET_VALUE",
  SET_ERROR  = "SET_ERROR",
  CLEAR_ERRORS = "CLEAR_ERRORS"
}

interface dataState {
  //INPUT VALUES
  email: string;
  password: string;
  confirmPassword: string;

  //PASSWORD VISIBILITIES
  showPassword: boolean;
  showPasswordConfirm: boolean;
  
  //VALIDATION ERRORS
  errors:{
    email: string;
    password: string;
    confirmPassword: string;
  }
}

interface dataAction {
  type: ActionType;
  value?: string | boolean;
  key: keyof dataState | keyof dataState["errors"];
}

const RegisterScreen = () => {
  const navigation = useNavigation();

  // Reducer to manage form state
  const setData = (state: dataState, action: dataAction): dataState => {
    const { type, key, value } = action;
    switch (type) {
      case ActionType.SET_VALUE:
        return {
          ...state,
          [key]: value,
        };
      case ActionType.SET_ERROR:
        return {
          ...state,
          errors: {
            ...state.errors, 
            [key]: value,
          },
        }
      case ActionType.CLEAR_ERRORS:
        return {
          ...state,
          errors:{ email: "", password: "", confirmPassword: "" }
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(setData, {
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showPasswordConfirm: false,
    errors: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleInputChange = (key: keyof dataState, value: string | boolean) => {
    dispatch({ type: ActionType.SET_VALUE, key, value });
  };

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleRegister = async () => {
    dispatch({
      type :ActionType.CLEAR_ERRORS,
      key: "errors"
    })
    try {
      // Validate the form data with Yup
      await validationSchema.validate(state, { abortEarly: false });
      navigation.navigate("Home", { email: state.email });
    } catch (errors: any) {
      // Show validation errors as alerts
     
      if (errors.inner) {
        errors.inner.forEach((err: any) => {
              dispatch({
                type: ActionType.SET_ERROR,
                key: err.path, // This corresponds to 'email', 'password', etc.
                value: err.message,
              });
        });
      } else {
        Alert.alert("Validation Error", errors.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <Text style={styles.subtitle}>Crea Tu Cuenta Y Comienza A Aprender</Text>

      {/* Email Input */}
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.noMarginInput}
            placeholder="Ingresa Tu Correo Electronico"
            placeholderTextColor="#FFFFFF" 
            value={state.email}
            onChangeText={(value) => handleInputChange("email", value)}
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.validationMessage}>{state.errors.email}</Text>
      </View>

      {/* Password Input */}
      <PasswordInput
        value={state.password}
        onChangeText={(value) => handleInputChange("password", value)}
        showPassword={state.showPassword}
        togglePasswordVisibility={() =>
          handleInputChange("showPassword", !state.showPassword)
        }
        placeholder="Ingresa Tu Contraseña"
        validationMessage={state.errors.password}
      />

      {/* Confirm Password Input */}
      <PasswordInput
        value={state.confirmPassword}
        onChangeText={(value) => handleInputChange("confirmPassword", value)}
        showPassword={state.showPasswordConfirm}
        togglePasswordVisibility={() =>
          handleInputChange("showPasswordConfirm", !state.showPasswordConfirm)
        }
        placeholder="Confirma Tu Contraseña"
        validationMessage={state.errors.confirmPassword}
      />

      <Text style={styles.centeredText}>
        Al Hacer Clic En 'Comenzar', Acepto Los{" "}
        <Text style={styles.link}>Términos De Uso</Text> Y Reconozco Que Mi
        Información Personal Se Utilizará De Acuerdo Con La{" "}
        <Text style={styles.link}>Política De Privacidad</Text> De Quasar.
      </Text>

      <Text style={[styles.centeredText,styles.bigText]}>
        ¿Ya tienes una cuenta?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Login")}
        >
          Iniciar Sesión
        </Text>
      </Text>
      <View style={styles.lowerContainer}>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Regístrate</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
