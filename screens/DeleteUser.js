import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const DeleteUser = () => {
  const [userId, setUserId] = useState("");

  const handleDeleteUser = () => {
    if (userId) {
      Alert.alert("Success", `User with ID ${userId} Deleted`);
      setUserId("");
    } else {
      Alert.alert("Error", "Please provide a valid user ID.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Delete User</Text>
      <AppTextInput
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <AppButton title="Delete User" onPress={handleDeleteUser} />
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

export default DeleteUser;
