import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const AddUser = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleAddUser = () => {
    if (name && address) {
      Alert.alert("Success", `User Added: ${name}, ${address}`);
      setName("");
      setAddress("");
    } else {
      Alert.alert("Error", "Please provide both name and address.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add User</Text>
      <AppTextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <AppTextInput
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />
      <AppButton title="Add User" onPress={handleAddUser} />
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

export default AddUser;
