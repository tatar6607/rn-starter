import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

const ListScreenExercise = () => {
  const friendsData = [
    { name: "Friend #1", age: "20", gender: "E" },
    { name: "Friend #2", age: "25", gender: "K" },
    { name: "Friend #3", age: "30", gender: "K" },
    { name: "Friend #4", age: "35", gender: "E" },
    { name: "Friend #5", age: "36", gender: "E" },
    { name: "Friend #6", age: "34", gender: "K" },
    { name: "Friend #7", age: "40", gender: "E" },
    { name: "Friend #8", age: "50", gender: "E" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friendsData}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age} - Gender {item.gender}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 10,
  },
});

export default ListScreenExercise;
