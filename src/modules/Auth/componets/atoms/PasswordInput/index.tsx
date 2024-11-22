import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

interface PasswordInputProps {
  value: string;
  onChangeText: (value: string) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  placeholder?: string;
  validationMessage?: string; // New prop for validation message
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  showPassword,
  togglePasswordVisibility,
  placeholder = "Password",
  validationMessage, // Destructure the validation message
}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.noMarginInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword}
          placeholderTextColor="#AAAAAA"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      {/* Render validation message if provided */}
      {validationMessage && (
        <Text style={styles.validationMessage}>{validationMessage}</Text>
      )}
    </View>
  );
};

export default PasswordInput;
