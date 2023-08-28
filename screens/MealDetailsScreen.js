import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/DummyData";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}> {selectedMeal.title}</Text>
        <View style={styles.details}>
          <Text style={[styles.detailItem, styles.detailText]}>
            {selectedMeal.duration}m
          </Text>
          <Text style={[styles.detailItem, styles.detailText]}>
            {selectedMeal.complexity.toUpperCase()}
          </Text>
          <Text style={[styles.detailItem, styles.detailText]}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>

        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>

        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </>
  );
};

export default MealDetailsScreen;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    fontWeight: "bold",
    color: "#e2b497",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
