import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between",
  },
  textOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "#ffb367",
    // borderColor: "red",
    //flex: 4, // defines the space that a certain element will take from the parent
    //alignSelf: "flex-end",
  },
  textTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: "#58b4ae",
    alignSelf: "flex-end",
    // flex: 4,
    //position: "absolute",
    //...StyleSheet.absoluteFillObject, // absolute fill takes the space of the parent
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "#ffe2bc",
    //flex: 2,
  },
});

export default BoxScreen;
