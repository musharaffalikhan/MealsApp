import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/DummyData";
import List from "../components/DeatilsList";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <ScrollView style={styles.rootContainer}>
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
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Ingredients</Text>
            </View>

            <List data={selectedMeal.ingredients} />
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Steps</Text>
            </View>

            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MealDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
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
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
