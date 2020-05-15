import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};

const CounterView = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({
            type: "increase",
          })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({
            type: "decrease",
          })
        }
      />
      <Text>Current count: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterView;
