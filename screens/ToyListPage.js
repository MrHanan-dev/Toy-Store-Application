
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";

const toys = [
  {
    id: 1,
    title: "Soft Teddy Bear made up of polythine and word most softest toy in the world",
    subTitle: "$20",
    description: "A soft and cuddly teddy bear for kids of all ages.",
    price: 20,
    quantity: 10,
    image: require("../assets/teddy.jpg"),
  },
  {
    id: 2,
    title: "Radio Controled toy and the one of the solar powered toy made in berlin",
    subTitle: "$40",
    description: "A radio-controlled toy that kids can easily operate.",
    price: 40,
    quantity: 5,
    image: require("../assets/radio.jpg"),
  },
  {
    id: 3,
    title: "Toy Train same and mace up of medicated stuff for the kinds of under 12",
    subTitle: "$12",
    description: "A colorful toy train that is fun to play with.",
    price: 12,
    quantity: 8,
    image: require("../assets/train.jpg"),
  },
  {
    id: 4,
    title: "Talking Robo is made up of best items made up in germany",
    subTitle: "$50",
    description: "An interactive robot that talks and entertains kids.",
    price: 50,
    quantity: 3,
    image: require("../assets/robo.jpg"),
  },
];

const ToyListPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={toys}
        keyExtractor={(toy) => toy.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            image={item.image}
            onPress={() => navigation.navigate("ToyDetailPage", { toy: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    flex: 1,
  },
});

export default ToyListPage;
