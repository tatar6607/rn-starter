import React, { useState } from "react";
import { Button, View, StyleSheet, Text, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Text style={styles.headerStyles}> Hello from Color Screen</Text>
      <Button
        title="ADD COLOR"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <Button
        title="REMOVE ALL"
        onPress={() => {
          setColors([]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item} // arrayin icinde sadece value oldugu icin item ==> item 
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginTop: 10,
                marginLeft: 10,
                height: 100,
                width: 100,
                backgroundColor: item, // item == randomRGB() 
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  headerStyles: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default ColorScreen;
