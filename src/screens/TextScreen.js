import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        onChangeText={(newValue) => setPassword(newValue)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry={true}
      />
      {password.length < 5 && (
        <Text>Password must have at least 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
