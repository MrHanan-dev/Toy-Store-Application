import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { DatabaseConnection } from "../Database/Database"; // Import Database functions

const db = DatabaseConnection.getConnection();

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    DatabaseConnection.createTable();
  }, []);

  const addUser = () => {
    DatabaseConnection.insertUser("John Doe", "123 Main St");
  };

  const fetchUsers = () => {
    DatabaseConnection.getUsers((users) => {
      console.log("Fetched users:", users);
    });
  };

  const deleteUser = (userId) => {
    DatabaseConnection.deleteUser(userId);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Text style={styles.title}>Log in</Text>
      <AppTextInput placeholder="Enter Your Email Please!" icon={"email"} />
      <AppTextInput placeholder="Enter Your Password Please!" icon={"lock"} />

      <AppButton
        title="Log in"
        onPress={() => navigation.navigate("CategoriesPage")}
      />

      <AppButton
        title="Register"
        onPress={() => navigation.navigate("CartPage")}
      />

      <Text style={styles.signup}>No account? Please Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  signup: {
    marginTop: 15,
    color: "green",
  },
});

export default LandingPage;
