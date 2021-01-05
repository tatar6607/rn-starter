import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const ComponentsScreen = () => {
  const name = 'Ozkan';

  return (
    <View>
      <Text style={textStyle.firstText}>Getting started with React Native! </Text>
      <Text style={textStyle.secondText}>My name is {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
 //   fontWeight: "bold",
 //   flexWrap: 1,
 //   alignContent: "center",
  },
  buttonStyle: {
    backgroundColor: "blue",
    height: "30px",
  },
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  avatarStyle: {
    height: 100,
    width: 100,
    alignContent: "center",
    //  size:"medium"
  },
});

const textStyle = StyleSheet.create({
  firstText: {
    fontSize: 45,
  },
  secondText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
