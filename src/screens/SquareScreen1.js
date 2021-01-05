import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { color } from "react-native-reanimated";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 250 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 250 || green + change < 0 ? null : setGreen(green + change);
        return; 
      case 'blue' : 
        blue + change > 250 || blue + change < 0 ? null : setBlue(blue + change) ;
        return;
    }
  };

//  console.log(red , green , blue);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          //  setRed(red + COLOR_INCREMENT);
          setColor("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          // setRed(red - COLOR_INCREMENT);
          setColor("red", -1 * COLOR_INCREMENT);
        }}
      />

      <ColorCounter
        color="Green"
        onIncrease={() => {
         // setGreen(green + COLOR_INCREMENT);
         setColor('green', COLOR_INCREMENT);
        }}
        onDecrease={() => {
         // setGreen(green - COLOR_INCREMENT);
         setColor('green' , -1 * COLOR_INCREMENT);
        }}
      />

      <ColorCounter
        color="Blue"
        onIncrease={() => {
         // setBlue(blue + COLOR_INCREMENT);
         setColor('blue', COLOR_INCREMENT);
        }}
        onDecrease={() => {
         // setBlue(blue - COLOR_INCREMENT);
         setColor('blue', -1 * COLOR_INCREMENT);
        }}
      />

      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
          marginLeft: 60,
          marginTop: 20,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBoxStyle: {
    height: 300,
    width: 300,
    // backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
    marginLeft: 60,
    marginTop: 20,
  },
});

export default SquareScreen;
