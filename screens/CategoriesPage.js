import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";

const CategoriesPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the category.</Text>
      <AppButton title="Toys" onPress={() => navigation.navigate("ToyListPage")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CategoriesPage;
