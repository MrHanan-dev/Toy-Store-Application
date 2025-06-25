import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import globalStyles from "../config/styles";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={buttonStyles.button}
      onPress={onPress}
    >
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
