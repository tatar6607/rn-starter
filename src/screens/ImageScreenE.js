import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetailExercise from "../components/ImageDetailE";

const ImageScreenExercise = () => {
  return (
    <View>
      <Text style={styles.headerText}>
        {" "}
        Welcome to the Image Screen Exercise !{" "}
      </Text>
      <ImageDetailExercise
        imageName="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={8}
      />
      <ImageDetailExercise
        imageName="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={9}
      />
      <ImageDetailExercise
        imageName="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    marginVertical: 12,
    textAlign: "center",
  },
});

export default ImageScreenExercise;
