import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AppButton from "../components/AppButton";

const CartPage = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    if (route.params?.addedToy) {
      const newToy = route.params.addedToy;
      setCartItems((prevItems) => [...prevItems, newToy]);
    }
  }, [route.params?.addedToy]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePlaceOrder = () => {
    Alert.alert("Order Placed", "Your order has been successfully placed!", [
      { text: "OK", onPress: () => navigation.navigate("Checkout") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      <AppButton title="See More Toys" onPress={() => navigation.navigate("ToyListPage")} />
      <AppButton title="Place Order" onPress={handlePlaceOrder} />
      <AppButton title="Cancel Order" onPress={() => navigation.navigate("CategoriesPage")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
  total: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CartPage;
