import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/DummyData";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    // const onPressHandler = () => {
    //   navigation.navigate("MealDetail", {
    //     mealId: itemData.item.id,
    //   });
    // };
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageurl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
