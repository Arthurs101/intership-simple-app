import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444444", // Dark gray border
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#333333",
  },
  noMarginInput: {
    color: "#FFFFFF", // White text
    flex: 1,
    padding: 10,
  },
  validationMessage: {
    color: "red",
    fontSize: 12,
    paddingTop: 5,
  },
  inputWrapper: {
    flex: 0,
    width: "100%",
    height: 120,
  },

});
