import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

const ToyDetailPage = ({ route, navigation }) => {
  const { toy } = route.params; 

  const handleBuyNow = () => {
    navigation.navigate("CartPage", { addedToy: toy });
  };

  return (
    <View style={styles.container}>
      <Image source={toy.image} style={styles.image} />
      <Text style={styles.title}>{toy.title}</Text>
      <Text style={styles.description}>{toy.description}</Text>
      <Text style={styles.price}>Price: ${toy.price}</Text>
      <Text style={styles.quantity}>Quantity Available: {toy.quantity}</Text>
      <AppButton title="Buy Now" onPress={handleBuyNow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "green",
    marginBottom: 10,
  },
  quantity: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
});

export default ToyDetailPage;
