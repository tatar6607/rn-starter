import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { color } from "react-native-reanimated";
import ColorCounter from "../components/ColorCounter";

// USING REDUCER WITH A LOT OF STATE

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state => {red:0, green:0, blue:0}
  // action => {colorToChange : red||green||blue, amount: increase||decrease }

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 250 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }; // this is for not change state dirctly
    case "change_green":
      return state.green + action.payload > 250 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 250 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //  console.log(red , green , blue);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          // dicpatch(action)==> action: {colorToChange:string, amount:number}
          // genel kural ==> action : {type:change_item, payload:number  }
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT });
        }}
      />

      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT });
        }}
      />

      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT });
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
