import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";

interface PasswordInputProps {
  value: string;
  onChangeText: (value: string) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  showPassword,
  togglePasswordVisibility,
  placeholder = "Password",
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.noMarginInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
        placeholderTextColor="#FFFFFF" 
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
