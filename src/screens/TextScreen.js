import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const TextInputScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text> Enter your name</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />

      {name.length > 5 ? (
        <Text>
          My name is {name} and my name's length higher than 5.
        </Text>
      ) : (
        <Text>
          My name is {name} and my name's length less then 5
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
  },
});

export default TextInputScreen;
