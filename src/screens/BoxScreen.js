import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style = {styles.viewParent}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}></View>
      <View style={styles.viewThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewParent: {
      height: 150,
      borderWidth: 1,
      borderColor: "black",
      flexDirection:"row", 
      justifyContent : "space-between",
  },
  viewOne: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  viewTwo: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    alignSelf : "flex-end",
  },
  viewThree: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
