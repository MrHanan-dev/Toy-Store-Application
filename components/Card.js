import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: colors.secondary,
    marginTop: 5,
  },
});

export default Card;
