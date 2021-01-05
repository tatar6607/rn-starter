import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const initilaValue = counter;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setCounter(0);
        }}
      />

      <Text style={styles.textStyle}> Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    textAlign: "center",
  },

  buttonViewStyle: {
    fontSize: 25,
  },
});

export default CounterScreen;
