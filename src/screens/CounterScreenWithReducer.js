import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const INCREMENT_NUMBER = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "change_increase":
      return { ...state, counter: state.counter + action.payload };
    case "change_decrease":
      return { ...state, counter: state.counter + action.payload };
    case "change_reset":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="INCREASE"
        onPress={() => {
          dispatch({ type: "change_increase", payload: INCREMENT_NUMBER });
        }}
      />
      <Button
        title="DECREASE"
        onPress={() => {
          dispatch({ type: "change_decrease", payload: -1 * INCREMENT_NUMBER });
        }}
      />
      <Button
        title="RESET"
        onPress={() =>{dispatch({ type: "change_reset", payload: 0}) }}
      />
      <Text style = {styles.textStyle} > Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: "center",
      },
});

export default CounterReducer;
