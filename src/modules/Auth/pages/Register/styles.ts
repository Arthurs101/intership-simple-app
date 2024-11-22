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
  lowerContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    flex: 1,
  },
  button: {
    backgroundColor: "#0F2DCB", // Blue button background
    padding: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // White text
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  }  
});
