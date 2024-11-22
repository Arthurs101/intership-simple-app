import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: "20%",
    flexDirection: "column",
    backgroundColor: "#000000", // Dark background
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#FFFFFF", // White text
  },
  subtitle: {
    fontSize: 16,
    color: "#AAAAAA", // Light gray text for subtitles
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#444444", // Dark gray border
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#333333", // Medium gray background
    color: "#FFFFFF", // White text
  },
  noMarginInput: {
    color: "#FFFFFF", // White text
    flex: 1,
    padding: 10,
  },
  centeredText: {
    fontSize: 12,
    color: "#AAAAAA", // Light gray text
    textAlign: "center",
    marginVertical: 10,
  },
  bigText:{
    fontSize: 20,
  },
  link: {
    color: "#1E90FF", // Blue link color
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
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
  inputWrapper: {
    width: "100%",
    height: 120,
  },
  validationMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  lowerContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    flex: 1,
  },
  button: {
    backgroundColor: "#0F2DCB", // Blue button background
    padding: 10,
    height: 100,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent : "center"
  },
  buttonText: {
    color: "#FFFFFF", // White text
    fontSize: 20,
    fontWeight: "bold",
  }
});
