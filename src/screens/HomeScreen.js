import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AppButton from "../components/AppButton";
import { DatabaseConnection } from "../Database/Database";

const db = DatabaseConnection.getConnection();

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT);",
        [],
        () => {
          console.log("Table created successfully");
        },
        (error) => {
          console.log("Error creating table: ", error);
        }
      );

      // Check if the table exists
      tx.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='users';",
        [],
        (_, results) => {
          console.log("Tables: ", results.rows._array);
        },
        (error) => {
          console.log("Error checking table existence: ", error);
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <AppButton title="Log in" onPress={() => navigation.navigate("CategoriesPage")} />
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
});

export default HomeScreen;
