import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const AddUser = () => {
  return (
    <Screen>
      <Text>Add user name and address on this page!</Text>

      <AppTextInput placeholder="Enter your name" />
      <AppTextInput placeholder="Enter your address" />

      <AppButton title="Add data" />
    </Screen>
  );
};

export default AddUser;

const styles = StyleSheet.create({});
