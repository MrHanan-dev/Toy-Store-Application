import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ name, size = 40, backgroundColor = colors.primary, iconColor = colors.white }) {
  return (
    <View style={[styles.icon, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default Icon;
