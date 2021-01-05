import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const ComponentsScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <View
          style={{ width: 100, height: 100, backgroundColor: "powderblue" }}
        >
          <Avatar style={styles.avatarStyle}
            rounded
            source={{
              uri: "https://reactjs.org/logo-og.png",
            }}
          />
        </View>
        <View style={{ backgroundColor: "skyblue" }}>
          <Text style={styles.textStyle}> Oguz sana geliyorum !!! </Text>
        </View>
      </View>
      <Button
        icon={<Icon name="arrow-right" size={20} color="white" />}
        iconRight
        title="Beni ara "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonStyle: {
    backgroundColor: "blue",
    height: "30px",
  },
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'stretch'
  
  },
  avatarStyle : {
     height:100,
     width:100,
  //  alignContent:"center",
  //  size:"medium"
  }
});

export default ComponentsScreen;
