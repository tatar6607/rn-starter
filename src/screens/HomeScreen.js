import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // props.navigation.navigate("Components"); ==> props tan baslatabiliriz ama navigation dan direk baslanabilir
  return (
    <View>
      <Text style={styles.text}>Hi there !! </Text>

      <Button
        title="Go to the Demo Components "
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate("ListScE");
        }}
        title="Go to the Original List Page"
      />

      <Button
        title="Go to the Image Screen"
        onPress={() => {
          navigation.navigate("ImageSc");
        }}
      />

      <Button
        title="Go to the Image Screen Exercise"
        onPress={() => {
          navigation.navigate("ImageScE");
        }}
      />

      <Button
        title="Go to the Counter Screen "
        onPress={() => {
          navigation.navigate("CounterSc");
        }}
      />

      <Button
        title="Go to the Color Add Screen"
        onPress={() => {
          navigation.navigate("ColorSc");
        }}
      />

      <Button
        title="Go to the Square Screen"
        onPress={() => {
          navigation.navigate("SquareSc");
        }}
      />

      <Button
        title=" Go to the Counter with Reducer"
        onPress={() => {
          navigation.navigate("CounterReducerSc");
        }}
      />

      <Button
        title="Go to the Text Input Screen"
        onPress={() => {
          navigation.navigate("TextInputSc");
        }}
      />

      <Button
        title="Go to the Box Screen"
        onPress={() => navigation.navigate("BoxSc")}
      />

      <TouchableOpacity
        style={styles.buttonStyle} // Button koymadan textleri link ghaline getirme
        onPress={() => {
          navigation.navigate("ListSc");
        }}
      >
        <Text> Go to the List Components</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
