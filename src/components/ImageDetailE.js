import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetailExercise = ({imageSource,imageName,imageScore}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}> {imageName} </Text>
      <Text style={styles.textStyle}> Image score - {imageScore} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 19,
    textAlignVertical: "bottom",
  },
});

export default ImageDetailExercise;
